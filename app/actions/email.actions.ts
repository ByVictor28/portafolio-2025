"use server";

import sgMail from "@sendgrid/mail";
import nodemailer from "nodemailer";

// Types for form data
export interface EmailFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResult {
  success: boolean;
  message?: string;
  error?: string;
}

// SendGrid implementation
async function sendWithSendGrid(data: EmailFormData): Promise<EmailResult> {
  try {
    if (
      !process.env.SENDGRID_API_KEY ||
      !process.env.SENDGRID_TO_EMAIL ||
      !process.env.SENDGRID_FROM_EMAIL
    ) {
      throw new Error("Email configuration is not configured");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `Portfolio Contact: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
           
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${data.message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${data.name}.</p>
          </div>
        </div>
      `,
      replyTo: data.email,
    };

    await sgMail.send(msg);
    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("SendGrid error:", error);
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    };
  }
}

// Main Server Action
export async function sendEmail(
  prevState: EmailResult | null,
  formData: FormData
): Promise<EmailResult> {
  try {
    // Extract form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Validation
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      };
    }

    // Sanitize inputs
    const sanitizedData: EmailFormData = {
      name: name.trim().substring(0, 100),
      email: email.trim().toLowerCase(),
      message: message.trim().substring(0, 2000),
    };

    // Choose email provider based on environment variables
    // Priority: SendGrid > Nodemailer
    if (process.env.SENDGRID_API_KEY) {
      return await sendWithSendGrid(sanitizedData);
    } else {
      console.error("No email provider configured");
      return {
        success: false,
        error:
          "Email service not configured. Please contact the administrator.",
      };
    }
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}

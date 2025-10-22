"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/email.actions";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import LinkedIn from "@/public/icons/LinkedIn";
import { useTranslations } from "next-intl";
import Link from "next/link";

// Submit button component with loading state
function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations("ContactForm.form");

  return (
    <button type="submit" disabled={pending} className="btn-primary">
      {pending ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {t("sendingButton")}
        </>
      ) : (
        t("sendButton")
      )}
    </button>
  );
}

// Alert component for success/error messages
function Alert({
  type,
  message,
}: {
  type: "success" | "error";
  message: string;
}) {
  if (!message) return null;

  return (
    <div
      className={`p-4 rounded-lg mb-6 ${
        type === "success"
          ? "bg-green-50 border border-green-200 text-green-800"
          : "bg-red-50 border border-red-200 text-red-800"
      }`}
    >
      <div className="flex items-center gap-2">
        {type === "success" ? (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendEmail, null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = useTranslations("ContactForm");

  // Reset form after successful submission
  if (state?.success && !isSubmitted) {
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  }

  return (
    <section className="my-container my-20 mb-56" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="my-subtitle w-full mt-10"
      >
        <Mail className="w-10 h-10 inline-block mr-3" />
        {t("title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="my-text"
      >
        {t("description")}
      </motion.p>
      <div className="flex flex-col md:flex-row gap-8 mt-10">
        <div className="flex flex-col gap-y-8  text-text-secondary w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="w-full"
          >
            <form action={formAction} className="space-y-6">
              {/* Success/Error Messages */}
              {state && (
                <Alert
                  type={state.success ? "success" : "error"}
                  message={state.message || state.error || ""}
                />
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="my-label">
                  {t("form.name")} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="my-input"
                  placeholder={t("form.namePlaceholder")}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="my-label">
                  {t("form.email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="my-input"
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="my-label">
                  {t("form.message")} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="my-input resize-vertical"
                  placeholder={t("form.messagePlaceholder")}
                />
              </div>

              {/* Submit Button */}
              <SubmitButton />
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="w-full md:w-1/2 flex flex-col gap-y-4 text-center"
        >
          <p className="my-text">{t("rightSide.readyText")}</p>
          <p className="">{t("rightSide.descriptionText")}</p>
          <div className="my-separator flex items-center gap-x-2">
            <div className="my-separator-line w-1/2 border-b-1 border-text-secondary"></div>
            <p className="my-text text-text-secondary whitespace-nowrap">
              {t("rightSide.orContactText")}
            </p>
            <div className="my-separator-line w-1/2 border-b-1 border-text-secondary"></div>
          </div>
          <div className="flex gap-x-4 justify-center">
            <Link
              href={`mailto:${process.env.SENDGRID_TO_EMAIL}`}
              target="_blank"
            >
              <button
                className="btn-primary"
                onClick={() =>
                  (window.location.href = `mailto:${process.env.SENDGRID_TO_EMAIL}`)
                }
              >
                <Mail className="w-5 h-5 inline-block mr-3" />
                {t("rightSide.emailButton")}
              </button>
            </Link>
            <Link
              href={`https://www.linkedin.com/in/victordelfin/`}
              target="_blank"
            >
              <button className="btn-primary">
                <LinkedIn className="w-5 h-5 inline-block mr-3" />
                {t("rightSide.linkedinButton")}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Additional Info */}
      <div className="mt-8 text-center text-sm">
        <p>{t("footer.responseTime")}</p>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Script from "next/script";

const exo2 = Exo_2({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "Victor Manuel Delfin Santos - Portfolio",
  description:
    "Victor Manuel Delfin Santos - Portfolio - Software Engineer - Full Stack Developer - SEO Expert",
  keywords: [
    "Victor Manuel Delfin Santos",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "SEO Expert",
  ],
  authors: [
    { name: "Victor Manuel Delfin Santos", url: "https://victordelfin.net" },
  ],
  creator: "Victor Manuel Delfin Santos",
  publisher: "Victor Manuel Delfin Santos",
  openGraph: {
    title: "Victor Manuel Delfin Santos - Portfolio",
    description:
      "Victor Manuel Delfin Santos - Portfolio - Software Engineer - Full Stack Developer - SEO Expert",
    url: "https://victor-delfin.com",
    siteName: "Victor Manuel Delfin Santos - Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Manuel Delfin Santos - Portfolio",
    description:
      "Victor Manuel Delfin Santos - Portfolio - Software Engineer - Full Stack Developer - SEO Expert",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={`antialiased`}> */}
      {/* <!-- Google Tag Manager --> */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K9Z7SQDN')`,
        }}
      ></Script>

      <body
        className={`!${exo2.variable} !font-exo2 antialiased text-text-primary`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9Z7SQDN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

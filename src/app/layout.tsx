import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import CookieConsent from "@/components/CookieConsent";
import AnnouncementBar from "@/components/AnnouncementBar";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover"
};

export const metadata: Metadata = {
  title: {
    default: "MAVYN",
    template: "%s | MAVYN"
  },
  description:
    "MAVYN is a UAE compliance, AML and regulatory advisory partner. Evidence-led work for banks, DNFBPs, free-zone entities and corporate groups.",
  metadataBase: new URL("https://mavyn.ae"),
  icons: {
    icon: "/images/webkonic (5).png",
    apple: "/images/webkonic (5).png"
  },
  openGraph: {
    title: "MAVYN — UAE Compliance & Regulatory Advisory",
    description:
      "Regulatory clarity, compliance capability and evidence-led advisory for UAE businesses.",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAVYN — UAE Compliance & Regulatory Advisory"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MAVYN — UAE Compliance & Regulatory Advisory",
    description:
      "Regulatory clarity, compliance capability and evidence-led advisory for UAE businesses.",
    images: ["/images/og-image.png"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#E0F2E0" />
      </head>
      <body className="font-sans bg-bg text-ink antialiased transition-colors duration-300">
        <ThemeProvider>
          <ScrollToTop />
          <Loader />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}


import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import CookieConsent from "@/components/CookieConsent";
import AnnouncementBar from "@/components/AnnouncementBar";

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
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
        <meta name="theme-color" content="#E0F2E0" />
      </head>
      <body className="font-sans bg-bg text-ink antialiased">
        <Loader />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}


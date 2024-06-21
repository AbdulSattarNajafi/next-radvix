import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { NextUIProvider } from "@/contexts/nextUIContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radvix | The First Project Management Tool Made For Researchers",
  description:
    "Radvix | The First Project Management Tool Made For Researchers",
  openGraph: {
    title: "Radvix",
    description:
      "Radvix | The First Project Management Tool Made For Researchers",
    url: "https://radvix.io/",
    siteName: "Radvix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radvix | The First Project Management Tool Made For Researchers",
    description:
      "Radvix | The First Project Management Tool Made For Researchers",
    images: "/twitter-image.png",
  },
  themeColor: "#52525B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}

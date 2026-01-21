import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkleCursor from "@/components/ui/SparkleCursor";
{/* FloatingCube removed */ }

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ivoryspark.com'),
  title: {
    default: "The Ivory Spark Studio | Premium 3D Printing & Design",
    template: "%s | The Ivory Spark Studio",
  },
  description: "Your premier destination for high-quality 3D printing services, custom CAD design, and unique 3D printed products. Bringing ideas to life with precision.",
  keywords: ["3D Printing", "CAD Design", "Prototyping", "Custom 3D Models", "Ivory Spark Studio"],
  authors: [{ name: "Ivory Spark Studio" }],
  creator: "Ivory Spark Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ivoryspark.com",
    title: "The Ivory Spark Studio | Premium 3D Printing & Design",
    description: "Your premier destination for high-quality 3D printing services, custom CAD design, and unique 3D printed products.",
    siteName: "The Ivory Spark Studio",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder or update path
        width: 1200,
        height: 630,
        alt: "The Ivory Spark Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ivory Spark Studio | Premium 3D Printing & Design",
    description: "Your premier destination for high-quality 3D printing services, custom CAD design, and unique 3D printed products.",
    images: ["/og-image.jpg"], // Ensure this image exists
  },
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-ivory selection:bg-gold selection:text-dark h-screen flex flex-col overflow-hidden`}
        suppressHydrationWarning
      >
        {/* <SparkleCursor /> */}
        {/* <FloatingCube /> */}
        <Navbar />
        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto scroll-smooth">
          <main className="w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

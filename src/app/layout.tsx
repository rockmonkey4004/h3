import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Health, Healing, and Hope (H3) | Laura Sanders",
    template: "%s | H3 with Laura"
  },
  description: "A journey of health, healing, and hope with wholesome recipes, wellness tips, and a community of support.",
  keywords: ["paleo recipes", "gluten-free", "wellness journey", "healthy living", "Laura Sanders", "H3"],
  authors: [{ name: "Laura Sanders" }],
  creator: "Laura Sanders",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://h3withlaura.com",
    title: "Health, Healing, and Hope (H3)",
    description: "Wholesome recipes and wellness tips for your journey of health and hope.",
    siteName: "H3 with Laura",
    images: [{
      url: "https://res.cloudinary.com/rockmonkey/image/upload/v1587132373/cinnamon-rolls_zy2vhh.jpg",
      width: 1200,
      height: 630,
      alt: "H3 with Laura - Cinnamon Rolls"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Health, Healing, and Hope (H3)",
    description: "Wholesome recipes and wellness tips for your journey of health and hope.",
    images: ["https://res.cloudinary.com/rockmonkey/image/upload/v1587132373/cinnamon-rolls_zy2vhh.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-white focus:text-accent-blue focus:font-bold focus:rounded-full focus:shadow-2xl focus:border-2 focus:border-accent-blue focus:outline-none transition-all"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

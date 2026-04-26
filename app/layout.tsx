import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scruggs Podiatry PC | Foot & Ankle Care in Pikesville, MD",
  description: "Expert podiatric care serving the Baltimore Metro area for over 25 years. Specializing in foot and ankle conditions, diabetic foot care, custom orthotics, and surgery.",
  keywords: "podiatrist, foot doctor, ankle specialist, Pikesville MD, Baltimore podiatry, diabetic foot care, heel pain, bunions, custom orthotics",
  authors: [{ name: "Scruggs Podiatry PC" }],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Scruggs Podiatry PC",
    description: "Expert foot and ankle care in Pikesville, MD",
    type: "website",
    locale: "en_US",
    siteName: "Scruggs Podiatry PC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

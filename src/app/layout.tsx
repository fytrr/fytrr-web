import "./globals.css";
import TopHeader from "../components/main-page/Header";
import Footer from "../components/main-page/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// --- UPDATED METADATA ---
export const metadata: Metadata = {
  title: {
    default: "FYTRR | Challenge Your Limits, Join The Race!",
    template: "%s | FYTRR",
  },
  description:
    "Join the FYTRR movement. Indias most electrifying sporting events: test your strength, speed, and endurance.",
};
// --- END OF METADATA ---

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

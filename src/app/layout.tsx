import "./globals.css";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopHeader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

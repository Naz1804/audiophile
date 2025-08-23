import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500','700']
})

export const metadata = {
  title: "audiophile",
  description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

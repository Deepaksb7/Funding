import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NeedOfFunding - A Website where you can raise your funds",
  description: "Need Funding is an online fundraising platform where individuals can raise funds for personal, creative, or startup projects with ease and security.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="min-h-[87.9vh] bg-gradient-to-r from-[#1b2c57]  to-[#334155] ">
        {children}
        </div>
        <Footer/>

      </body>
    </html>
  );
}

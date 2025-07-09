import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio-Siddharth",
  description: "My portfolio website created with Next.js",
};

export default function RootLayout({ children }) {

  

  return (
    <html lang="en">

      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Background/>
        <Navbar/>

        <div className="">

        {children}
        </div>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Michael Carey",
  description: "Michael Carey Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-950">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}>
          {children}
      </body>
    </html>
  );
}

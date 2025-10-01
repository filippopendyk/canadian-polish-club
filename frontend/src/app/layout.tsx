import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Canadian Polish Club",
  description: "Founded in Ottawa in 1936, the Canadian Polish Club (Klub Polsko-Kanadyjski) promotes Polish-Canadian heritage, history, and culture, while fostering cooperation between Canada and Poland.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

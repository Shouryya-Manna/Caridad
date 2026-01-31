import type { Metadata } from "next";
import { Poppins, Ubuntu_Condensed, PT_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  fallback: ["sans-serif"],
});

const ubuntuCondensed = Ubuntu_Condensed({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-ubuntu-condensed",
  fallback: ["sans-serif"],
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-pt-sans",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "FurrFolks - Changing Lives",
  description: "",
  icons: {
    icon: '/FurrFolks-favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${ubuntuCondensed.variable} ${ptSans.variable}`}>
      <body className={ptSans.className}>{children}</body>
    </html>
  );
}

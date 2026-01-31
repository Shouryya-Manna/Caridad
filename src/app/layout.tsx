import type { Metadata } from "next";
import { Poppins, Ubuntu_Condensed } from "next/font/google";
import localFont from "next/font/local";
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

const productSans = localFont({
  src: [
    {
      path: "./fonts/ProductSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ProductSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-product-sans",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "FurrFolks - Protecting Animals, Changing Lives",
  description: "Join FurrFolks in our mission to protect animals and create positive change in communities worldwide.",
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
    <html lang="en" className={`${poppins.variable} ${ubuntuCondensed.variable} ${productSans.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Adam L Patterson - Personal Website",
  description: "Personal website showcasing research, publications, and professional experience.",
  openGraph: {
    title: "Adam L Patterson - Personal Website",
    description: "Personal website showcasing research, publications, and professional experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

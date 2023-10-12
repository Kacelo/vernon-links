"use client";
import "semantic-ui-css/semantic.min.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '800', '700'],
})
const title = "Vernon's Linked List";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <head>
        <title>{title}</title>
        {/* <meta name="description" content="Beauty is our duty" /> */}
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  );
}

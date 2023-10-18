"use client";
import "semantic-ui-css/semantic.min.css";
import { Inter } from "next/font/google";
import { DesktopNavBar } from "@/components";
import BasicExample from "@/components/navbar/basic-nav";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "800", "700"],
});
const title = "Vernon's Linked List";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          // crossorigin="anonymous"
        /> */}
        {/* <meta name="description" content="Beauty is our duty" /> */}
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <DesktopNavBar />
        {children}
      </body>
    </html>
  );
}

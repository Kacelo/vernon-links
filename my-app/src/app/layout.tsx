// import './globals.css'
"use client";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { CacheProvider } from "@chakra-ui/next-js";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <title>Vernon's Linked List</title>
        <meta title="description" content="Beauty is our duty" />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="32x32"
          href="shena-logo.jpeg"
        />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>{" "}
      </body>{" "}
    </html>
  );
}

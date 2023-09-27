// import './globals.css'
"use client"

import { ChakraProvider, theme } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider >{children}</ChakraProvider>
      </body>{" "}
    </html>
  );
}

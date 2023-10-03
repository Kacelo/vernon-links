// import './globals.css'
"use client";

import { ChakraProvider, theme } from "@chakra-ui/react";
// import { Inter } from "next/font/google";
import { CacheProvider } from "@chakra-ui/next-js";

// const inter = Inter({ subsets: ["latin"] });
const title = "Vernon's Linked List";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* <head>
        <title>{title}</title>
        <meta title="description" content="Beauty is our duty" />
      </head> */}
      <body>
        {/* <CacheProvider> */}
          <ChakraProvider>{children}</ChakraProvider>
        {/* </CacheProvider> */}
      </body>
    </html>
  );
}

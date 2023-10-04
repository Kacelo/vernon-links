// import './globals.css'
"use client";
// import { Inter } from "next/font/google";
import 'semantic-ui-css/semantic.min.css'

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
         {children}
      </body>
    </html>
  );
}

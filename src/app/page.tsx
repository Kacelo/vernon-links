"use client";
import { useEffect, useState } from "react";
import LinksComponent from "./components/links";
import { socials, userDetails } from "./components/links-data";

export default function Home() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      {isClient ? <LinksComponent links={socials} user={userDetails} /> : ""};
    </>
  );
}

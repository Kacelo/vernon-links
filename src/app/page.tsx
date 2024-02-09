"use client";
import { useEffect, useState } from "react";
import LinksComponent from "../components/links";
import { socials, userDetails } from "../components/links-data";
import LandingPage from "@/components/landing-page/landing-page";
// import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import store from "@/store";
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Provider store={store}>
      {isClient ? <LandingPage/> : ""};
    </Provider>
  );
}

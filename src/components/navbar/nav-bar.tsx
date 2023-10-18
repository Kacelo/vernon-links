import React from "react";
import linkStyles from "./styles.module.css";
import Image from "next/image";
import BasicExample from "./basic-nav";

export const DesktopNavBar = () => {
  return (
    <div style={styles.mainDiv}>
      <BasicExample />
    </div>
  );
};
const styles = {
  mainDiv: {
    backgroundColor: "rgb(243, 243, 241)",
    padding: "2rem",
    fontFamily: "__Inter_c0ea59",
    marginBottom: "1em",
  },
  navBar: {
    borderRadius: "100px",
    backgroundColor: "white",
    padding: "12px",
    margin: "auto auto",
    maxWidth: "1536px",
  },
  list: {
    display: "inline",
  },
};

import React from "react";
import linkStyles from "./styles.module.css"
interface LinkType {
  link: string;
  title: string;
}
const ListLink = ({ link, title }: LinkType) => {
  return (
    <li style={{ float: "left" }}>
      <a
        href={link}
        style={{ display: "block", textAlign: "center", padding: "14px 16px", }}
        className={linkStyles.links}
      >
        {title}
      </a>
    </li>
  );
};
export const DesktopNavBar = () => {
  return (
    <div style={styles.mainDiv}>
      <nav style={styles.navBar}>
        <ul style={{ listStyleType: "none", margin: 0 }}>
          <li style={{float:"left"}}>
            <div>
              <a style={{ display: "block", padding: "14px 0 16px" }} href="/">
              <img src="/images/light.png" width={100}></img>
              </a>
            </div>
          </li>
          <ListLink link={""} title="Templates" />
          <ListLink link={""} title="Marketplace" />
          <ListLink link={""} title="Discover" />
          <ListLink link={""} title="Pricing" />
          <ListLink link={""} title="Learn" />
        </ul>
        <div style={{ display: "flex", marginLeft: "auto", textAlign: "end" }}>
          <button
            type="submit"
            style={{
              borderRadius: "8px",
              display: "block",
              padding: "18px 26px 20px",
              marginLeft: "auto",
            }}
            className="ui primary button"
          >
            Log in
          </button>
          <button
            type="submit"
            style={{
              borderRadius: "1000px",
              display: "block",
              padding: "18px 26px 20px",
              marginLeft: "1em",
            }}
            className="ui secondary button"
          >
            Sign up free
          </button>
        </div>
      </nav>
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

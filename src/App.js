import Links from "./components/links/links-display";
import "./App.css";
import { Moon, Sun } from "react-feather";
import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { SessionService } from "./services/session.service";
function App() {
  const session = SessionService.session;

  const sm = SessionService.create();
  let localDataSubscription = session;
  let initialSub = session;

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    initialSub.store("site-dark-mode", darkMode)
    // localStorage.setItem("site-dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      const links = document.getElementById("links");
      links.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      const links = document.getElementById("links");
      links.classList.remove("dark");
    }
  }, [darkMode]);
  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    console.log(json);
    if (currentMode) {
      setDarkMode(!darkMode);
    } else {
      setDarkMode(darkMode);
    }
  }, []);

  console.log(document);
  return (
    <div className="App">
      <Row>
        <Col className="col-9"></Col>
        <Col className="col-3">
          {darkMode ? (
            <Sun
              onClick={() => setDarkMode(false)}
              style={{ cursor: "pointer", color: "white" }}
              className="sun"
            />
          ) : (
            <Moon
              onClick={() => setDarkMode(true)}
              style={{ cursor: "pointer", color: "black" }}
              label="T"
            />
          )}{" "}
        </Col>
      </Row>
      <Row style={{ marginTop: "1rem", textAlign: "center" }}>
        <Col className="col">
          <Links />
        </Col>
        {/* <Col className="col-1">
          {darkMode ? (
            <Sun
              onClick={() => setDarkMode(false)}
              style={{ cursor: "pointer", color: "white" }}
              className="sun"
            />
          ) : (
            <Moon
              onClick={() => setDarkMode(true)}
              style={{ cursor: "pointer", color: "black" }}
            />
          )}
        </Col> */}
      </Row>
    </div>
  );
}

export default App;

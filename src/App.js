import Links from "./components/links/links-display";
import "./App.css";
import { Moon, Sun } from "react-feather";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Container,
  CardImg,
} from "reactstrap";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);
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

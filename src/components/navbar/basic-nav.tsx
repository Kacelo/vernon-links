import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <Container>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          style={{
            padding: "14px 0",
            maxWidth: "1536px",
            borderRadius: "100px",
          }}
          // sticky="top"
          // fixed="top"
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <Image
                src="/images/light.png"
                width={100}
                alt="logo image"
                height={20}
              ></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-start flex-grow-1 pe-3"
                  style={{ padding: "7px 0" }}
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "auto",
                    textAlign: "end",
                  }}
                >
                  <Link href="/sign-in">
                    <button
                      type="submit"
                      style={{
                        borderRadius: "8px",
                        display: "block",
                        padding: "18px 26px 20px",
                      }}
                      className="ui primary button"
                    >
                      Log in
                    </button>
                  </Link>

                  <Link href="/sign-up">
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
                  </Link>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </Container>
  );
}
const styles = {
  links: {},
};

export default OffcanvasExample;

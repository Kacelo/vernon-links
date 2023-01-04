import React from "react";
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
import social_links from "./links-data";
import "../../App.css";

const Links = () => {
  const myLinks = social_links.socials.map((links, index) => {
    console.log(index)
    return (
      <ListGroupItem className="" key={index} href={links.link} tag="a">
        <Row className="stackable">
          <Col className="col-4">
            <b><p>{links.name}</p></b>
          </Col>
          <Col className="col-6">
            <p>{links.description}</p>
          </Col>
          <Col className="col-2">
            <img alt="" src={links.icon} style={{ width: "25px" }}></img>
          </Col>
        </Row>
      </ListGroupItem>
    );
  });
  return (
    <Container>
      {/* <Card>
          <CardBody> */}
      <Container
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          width: "fit-content",
        }}
        className="sm"
      >
        <CardImg
          src="https://pbs.twimg.com/profile_images/1297566220745678848/tMal4cip_400x400.jpg"
          style={{ width: "10rem", borderRadius: "50%" }}
        ></CardImg>
        <div>
          <h4>Vernon's Links</h4>
        </div>
        <ListGroup id="links">{myLinks}</ListGroup>
      </Container>
    </Container>
  );
};

export default Links;

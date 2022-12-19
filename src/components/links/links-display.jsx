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
  console.log(social_links.socials.map((links) => links.name));
  const myLinks = social_links.socials.map((links) => {
    return (
      <ListGroupItem className="" href={links.link} tag="a">
        <Row className="stackable">
          <Col className="col-3">
            <h5>{links.name}</h5>
          </Col>
          <Col className="col-7">
            <p>{links.description}</p>
          </Col>
          <Col className="col-2">
            <img alt="" src={links.icon} style={{ width: "30px" }}></img>
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
          width: "max-content",
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
        {/* </CardBody>
        </Card> */}

        <ListGroup id="links" >{myLinks}</ListGroup>
      </Container>
    </Container>
  );
};

export default Links;

import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
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
type LinkType = {
  name: string;
  description: string;
  icon: string;
  link?: string;
};
interface LinksInterface {
  links: LinkType[];
}

const RoundedDiv = ({ name, description, icon }: LinkType) => {
  return (
    <Row className="stackable" style={styles.links}>
      <SimpleGrid columns={{ base: 2, md: 2 }} spacing={10}>
      <Stack direction={'row'} style={{justifyContent:"space-around"}}>

      <Box margin={"auto 0"}>
          <img alt="" src={icon} style={{ width: "30px" }}></img>
        </Box>
        <Box >
          <p>{description}</p>
        </Box>
        {/* <Box margin={"auto 0"}>
          <img alt="" src={icon} style={{ width: "30px" }}></img>
        </Box> */}
        </Stack>

      </SimpleGrid>
    </Row>
  );
};

const LinksComponent = ({ links }: LinksInterface) => {
  const myLinks = links.map((linkItem, index) => {
    console.log(index);
    const { name, description, icon, link } = linkItem;
    return (
      <ListGroupItem className="" key={index} href={link} tag="a">
        <RoundedDiv name={name} description={description} icon={icon} />
      </ListGroupItem>
    );
  });
  return (
    <Container>
      <Container
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          width: "",
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

const styles = {
  links: {
    borderStyle: "solid",
    borderRadius: "60px",
    marginBottom: "1rem",
    // marginLeft:"35%",
    // marginRight: "35%"

  },
};
export default LinksComponent;

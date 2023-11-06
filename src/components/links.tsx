import { Container, Button, Grid, Segment, Header } from "semantic-ui-react";

import React, { useEffect, useState } from "react";
import { LinkSharingModal2 } from "./shareModal";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Image from "next/image";

type LinkType = {
  name: string;
  description: string;
  icon: string;
  link?: string;
};
type UserType = {
  name: string;
  profilePicture: string;
};
interface LinksInterface {
  links: LinkType[];
  user: UserType;
}

const ModalButton = (linkDetails: LinkType) => {
  const { link, icon } = linkDetails;
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    setIsOpen(openModal);
  }, [openModal]);

  return (
    <div style={{ margin: "auto 0", marginRight: "15px" }}>
      <Button
        style={{
          borderRadius: "4rem",
          width: "40px",
          height: "40px",
          backgroundColor: "white",
          borderStyle: "none",
          cursor: "pointer",
        }}
        _hover={{
          bg: "gray.200",
        }}
        onClick={handleOpen}
      >
        <div style={{ margin: "2px 0 0 0", backgroundColor: "transparent" }}>
          <BiDotsHorizontalRounded />
        </div>
      </Button>
      <LinkSharingModal2 link={link} openModal={isOpen} linkIcon={icon} />
    </div>
  );
};

const RoundedDiv = (linkData: LinkType) => {
  const { name, description, icon, link } = linkData;
  return (
    // <div className="" style={{ borderRadius: "60px", borderStyle: "solid" }}>
    <Segment style={{ borderRadius: "40px" }}>
      <Grid columns={"equal"} padded={"vertically"}>
        <Grid.Row
          style={{
            // boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            padding: 0,
          }}
        >
          <Grid.Column
            style={{ textAlign: "center", margin: "auto 0" }}
            as={"a"}
            href={link}
            // width={1}
          >
            <Image alt="" src={icon} width={30} height={30} />
          </Grid.Column>
          <Grid.Column
            style={{ textAlign: "center", margin: "auto 0" }}
            as={"a"}
            href={link}
            width={8}
            animated
          >
            {/* <Button variant={"link"} colorScheme={"black.100"} size={"small"}> */}
            {description}
            {/* </Button>{" "} */}
          </Grid.Column>
          <Grid.Column style={{ textAlign: "end" }}>
            {ModalButton(linkData)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );

  {
    /* <Stack
        direction={"row"}
        style={{
          width: "100%",
          height: "%100",
          margin: "1em 0",
          cursor: "pointer",
        }}
      >
        <Box
          style={{ textAlign: "center", margin: "auto 10px" }}
          as={"a"}
          href={link}
        >
          <Image alt="" src={icon} style={{ width: "30px" }} />
        </Box>

        <Box
          style={{ textAlign: "center", margin: "auto auto" }}
          as={"a"}
          href={link}
        >
          <Button variant={"link"} colorScheme={"black.100"} size={"small"}>
            {description}
          </Button>
        </Box>
        {ModalButton(link as string)}
      </Stack> */
  }
  // </div>
};
// BiDotsHorizontalRounded

const LinksComponent = ({ links, user }: LinksInterface) => {
  const { name, profilePicture } = user;

  return (
    <Container
      style={{
        margin: "auto",
        maxWidth: "500px!important",
        marginTop: "5em",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        {/* <div style={{ textAlign: "end" }}>
          {ModalButton("localhost" as string)}
        </div> */}
        <Image
          src={profilePicture}
          width={150}
          height={150}
          style={{ display: "inline-block", borderRadius: "200px" }}
          alt="Profile Picture"
        />

        <Header as="h1">{name}</Header>

        {links.map((linkItem, index) => (
          <RoundedDiv
            key={index}
            name={linkItem.name}
            description={linkItem.description}
            icon={linkItem.icon}
            link={linkItem.link}
          />
        ))}
      </div>
    </Container>
  );
};

const styles = {
  links: {
    borderStyle: "solid",
    borderRadius: "60px",
    marginBottom: "1rem",
    maxWidth: "500px",
    margin: "1em auto",
  },
  listGroup: {
    maxWidth: "500px",
    textAlign: "center",
  },
};
export default LinksComponent;

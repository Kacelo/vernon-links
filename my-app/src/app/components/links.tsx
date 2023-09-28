import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Image,
  Link,
  List,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { LinkSharingModal } from "./shareModal";
import { BiDotsHorizontalRounded } from "react-icons/bi";

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

const RoundedDiv = ({ name, description, icon, link }: LinkType) => {
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    setIsOpen(openModal);
  }, [openModal]);
  return (
    <Container
      className="stackable"
      style={styles.links}
      rounded={"full"}
      border={1}
      height={""}
    >
      <Stack
        direction={"row"}
        style={{ width: "100%", height: "%100", margin: "1em 0", cursor:"pointer" }}
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
          <Button variant={"link"} colorScheme={"black.100"} size={"sm"}>
            {description}
          </Button>
        </Box>
        <Box margin={"auto 0"} marginRight={"15px"}>
          <Button
            style={{
              borderRadius: "4rem",
              width: "30px",
              height: "30px",
              backgroundColor: "transparent",
              borderStyle: "none",
              cursor: "pointer",
            }}
            _hover={{
              bg: "grey.200",
            }}
            onClick={handleClick}
          >
            <Box
              style={{ margin: "2px 0 0 0", backgroundColor: "transparent" }}
            >
              {" "}
              <BiDotsHorizontalRounded />
            </Box>
          </Button>
          <LinkSharingModal link={link} openModal={isOpen} on />
        </Box>
      </Stack>
    </Container>
  );
};
// BiDotsHorizontalRounded

const LinksComponent = ({ links, user }: LinksInterface) => {
  const { name, profilePicture } = user;

  return (
    <Container
      style={{
        margin: "auto",
        maxWidth: "500px",
        marginTop: "10em",
        textAlign: "center",
      }}
    >
      <Image
        src={profilePicture}
        rounded={"full"}
        width={200}
        display={"inline-block"}
        // style={{ width: "10rem", borderRadius: "50%" }}
      />

      <Box>
        <Heading>{name}'s Links</Heading>
      </Box>
      <List id="links" style={{ padding: 0 }}>
        {links.map((linkItem, index) => (
          <RoundedDiv
            key={index}
            name={linkItem.name}
            description={linkItem.description}
            icon={linkItem.icon}
            link={linkItem.link}
          />
        ))}
      </List>
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

import {
  Box,
  Container,
  Heading,
  IconButton,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { BookingModal } from "./shareModal";

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
  return (
    <Box
      className="stackable"
      style={styles.links}
      rounded={"full"}
      border={1}
      height={""}
    >
      <Stack
        direction={"row"}
        style={{ width: "100%", height: "%100", margin: "1em 0" }}
      >
        <Box marginLeft="10px" margin="auto 10px" columnGap={5}>
          <Link href={link as string}>
            <Image alt="" src={icon} style={{ width: "30px" }} />
          </Link>
        </Box>

        {/* Wrap the icon and description in a div with display: flex */}

        <Box style={{ textAlign: "center", margin: "auto auto" }}>
          <Link href={link as string} style={{ textAlign: "center" }}>
            <Text>{description}</Text>
          </Link>
        </Box>
        <Box margin={"auto 0"} marginRight={"15px"}>
          <BookingModal />
        </Box>
      </Stack>
    </Box>
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
        textAlign: "center"
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

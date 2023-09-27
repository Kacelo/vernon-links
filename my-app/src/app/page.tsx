"use client";
import Image from "next/image";
import LinksComponent from "./components/links";
import { socials, userDetails } from "./components/links-data";
import { Col, Row } from "reactstrap";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <LinksComponent links={socials} user={userDetails} />;
    </>
  );
}

import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  Box,
  Button,
  Container,
  List,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { SiLinkedin, SiMessenger } from 'react-icons/si'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


interface LinkSharingModalProps {
  link?: string;
  openModal: boolean;
  onCloseModal: () => void; // Function to close the modal
}

export function LinkSharingModal({
  link,
  openModal,
  onCloseModal, // Receive the onCloseModal function as a prop
}: LinkSharingModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Use openModal prop to control the modal's visibility
  React.useEffect(() => {
    if (openModal) {
      onOpen();
    } else {
      onClose();
    }
  }, [openModal, onOpen, onClose]);
  // Share function for each social media platform
  const shareOnFacebook = () => {

    const message = `${link}`;
    const url = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    console.log("Sharing on Facebook:", link);
  };

  const shareOnTwitter = () => {

    const message = `Hello, check this link out: - ${link}`;
    const url = `https:///x.com/intent/tweet?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const shareOnLinkedIn = () => {

    const message = `${link}`;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const shareOnWhatsapp = () => {
    const message = `Hello, check this link out: - ${link}`;
    const url = `https://wa.me/?text${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Box textAlign={"center"}>
          {link==="localhost"? <ModalHeader>Share this link page</ModalHeader>  : <ModalHeader>Share this link</ModalHeader>}
          <ModalCloseButton onClick={onCloseModal} />{" "}
          </Box>
          
          {/* Call the onCloseModal function */}
          <ModalBody>
            {/* {link} */}
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button colorScheme="facebook" onClick={shareOnFacebook} width={200} leftIcon={<FaFacebook />}>
                Share on Facebook
              </Button>
              <Button colorScheme="blackAlpha" onClick={shareOnTwitter} width={200} leftIcon={<FaXTwitter />}>
                Share on X
              </Button>
              <Button colorScheme="linkedin" onClick={shareOnLinkedIn} width={200} leftIcon={<SiLinkedin />}>
                Share on LinkedIn
              </Button>
              <Button colorScheme="whatsapp" onClick={shareOnWhatsapp} width={200} leftIcon={<FaWhatsapp />}>
                Share on Whatsapp
              </Button>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal}>
              Sign Up free
            </Button>
            <Button variant="ghost">Find Out More</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

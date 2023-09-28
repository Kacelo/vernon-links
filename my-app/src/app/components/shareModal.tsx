import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
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
    // Implement Facebook sharing logic here
    console.log("Sharing on Facebook:", link);
  };

  const shareOnTwitter = () => {
    // Implement Twitter sharing logic here
    console.log("Sharing on Twitter:", link);
  };

  const shareOnLinkedIn = () => {
    // Implement LinkedIn sharing logic here
    console.log("Sharing on LinkedIn:", link);
  };
  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share this link</ModalHeader>
          <ModalCloseButton onClick={onCloseModal} />{" "}
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
              <Button colorScheme="facebook" onClick={shareOnFacebook} width={200}>
                Share on Facebook
              </Button>
              <Button colorScheme="blackAlpha" onClick={shareOnTwitter} width={200}>
                Share on X
              </Button>
              <Button colorScheme="linkedin" onClick={shareOnLinkedIn} width={200}>
                Share on LinkedIn
              </Button>
              <Button colorScheme="whatsapp" onClick={shareOnLinkedIn} width={200}>
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

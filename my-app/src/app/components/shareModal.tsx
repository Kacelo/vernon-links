import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Flex,
  Heading,
  Text,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export function BookingModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button >Open Modal</Button> */}
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
        onClick={onOpen}
      >
        <div style={{ margin: "2px 0 0 0", backgroundColor: "transparent" }}>
          {" "}
          <BiDotsHorizontalRounded />
        </div>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

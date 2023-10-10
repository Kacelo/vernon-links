"use client";
import { useState } from "react";
import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Modal,
} from "semantic-ui-react";
import { FaXTwitter } from "react-icons/fa6";
interface LinkSharingModalProps {
  link?: string;
  openModal: boolean;
  linkIcon?: string;
}
export const LinkSharingModal2 = ({
  link,
  openModal,
  linkIcon, // Receive the onCloseModal function as a prop
}: LinkSharingModalProps) => {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    if (openModal) {
      setOpen(true);
    }
  }, [openModal]);
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
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="mini"
      // trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>
        <Image
          src={linkIcon}
          width={80}
          display={"inline-block"}
          alt="Profile Picture"
          // circular
          centered
        />
      </Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Grid textAlign="center">
            <Grid.Column width={10}>
              <Header>Share this link</Header>
              <List animated verticalAlign="middle">
                <List.Item>
                  <Button color="facebook" onClick={shareOnFacebook} fluid>
                    <Icon name="facebook" />
                    Share on Facebook
                  </Button>
                </List.Item>

                <List.Item>
                  <Button color="linkedin" onClick={shareOnLinkedIn} fluid>
                    <Icon name="linkedin" />
                    Share on LinkedIn
                  </Button>
                </List.Item>
                <List.Item>
                  <Button color="green" onClick={shareOnWhatsapp} fluid>
                    <Icon name="whatsapp" /> Share on Whatsapp
                  </Button>
                </List.Item>
                <List.Item>
                  <Button color="black" onClick={shareOnTwitter} fluid>
                    <FaXTwitter style={{ marginRight: "6px" }} />
                    Share on X
                  </Button>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {/* <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button> */}
        <Button
          content="Close"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

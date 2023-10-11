import {
  Container,
  Button,
  Grid,
  Segment,
  Image,
  Header,
  Checkbox,
  Form,
  Input,
} from "semantic-ui-react";

import React, { useEffect, useState } from "react";

const SignUpForm = () => {
  const [enableButton, setEnableButton] = useState(false);

  const handleButtonClick = () => {
    setEnableButton(!enableButton);
  };
  return (
    <Grid stackable columns={2} >
      <Grid.Column width={11} style={{ padding: "0em 5em" }}>
      <Container style={{ textAlign: "start", margin: "0em auto" }}>
          <Image src="images/light.png" width={150} height={150} alt=""></Image>
        </Container>
        <Container style={{ textAlign: "center", margin: "2em auto" }}>
          <h1 style={fontStyles}>Join Linked List</h1>
          <p style={fontStyles.secondaryFont}>Yup! its Free!</p>
        </Container>
        <Container style={{ textAlign: "center", width:"640px", height:"100vh"}}>
          <Grid.Column width={4} >
            <Form style={{ margin: "0em 0em" }}>
              <Form.Field>
                <Input placeholder="Email" />
              </Form.Field>
              <Form.Field style={{ borderRadius:"20px"}}> 
                <Input label="my-linked-tree/" placeholder="username" />
              </Form.Field>
              <Form.Field style={{display:"inline-flex"}}>
                <Checkbox
                  label=""
                  onClick={handleButtonClick}
                />
                <p>I agree to the <a>Terms and Conditions</a></p>
              </Form.Field>
              <Button type="submit" primary disabled={!enableButton} style={{width:"-webkit-fill-available", borderRadius:"20px"}}>
                Create Account
              </Button>
            </Form>
            <Container style={{ margin: "2em 0" }}>
              <p style={fontStyles.secondaryFont}>
                Already have an account? <a href="google.com">Log In</a>
              </p>
            </Container>
          </Grid.Column>
        </Container>
      </Grid.Column>
      <Grid.Column
        width={5}
        style={{ backgroundColor: "", height: "auto", backgroundPosition:"center", backgroundSize: "cover", backgroundImage: "url(images/signup5.png)" }}
      >
        {/* <Image src="images/signup4.png"/> */}
      </Grid.Column>
    </Grid>
  );
};
// <Container style={{ margin: "15em 10em" }}>
const fontStyles = {
  fontSize: "48px",
  letterSpacing: "-2px",
  fontWeight: "800",
  fontFamily: "__Inter_c0ea59",
  secondaryFont: {
    color: "rgb(103 107 95)"
  }
}
export default SignUpForm;

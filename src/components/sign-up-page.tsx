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

const SignUpForm = () => (
  // <Container style={{ margin: "15em 10em" }}>
    <Grid columns={2}>
      <Grid.Column width={10}>
        <Container style={{ textAlign: "center", margin: "3em auto"}}>
          <h1>Join LinkedList</h1>
          <p>Yup! its Free!</p>
        </Container>
        <Container >
          <Form style={{ margin: "0em 20em"}}>
            <Form.Field>
              <Input placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <Input label="my-linked-tree/" placeholder="username" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit" primary>
              Create Account
            </Button>
          </Form>
        </Container>
      </Grid.Column>
      <Grid.Column width={6}>
        <Image src="https://media.cnn.com/api/v1/images/stellar/prod/201025172820-drake-2019-file.jpg?q=x_3,y_49,h_1684,w_2993,c_crop/h_720,w_1280/f_webp"/>
      </Grid.Column>
    </Grid>
  // </Container>
);

export default SignUpForm;

import {
  Container,
  Button,
  Grid,
  Segment,
  // Image,
  Header,
  Checkbox,
  Form,
  Input,
} from "semantic-ui-react";

import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { signInModel } from "./sign-in-model";
import { signInValidationSchema } from "./sign-in-validation-schema";
import Image from "next/image";
import useDeviceSize from "@/helpers/screen-width-hook";

const SignInForm = () => {
  const [enableButton, setEnableButton] = useState(false);

  const handleButtonClick = () => {
    setEnableButton(!enableButton);
  };
  const [width] = useDeviceSize();

  const accountQuestion = "Don't have an account?";
  return (
    <Grid stackable columns={2} style={{ height: "100%" }}>
      <Grid.Column width={10} style={{ padding: "0em 5em" }}>
        <Container style={{ textAlign: "start", margin: "0em auto" }}>
          <Image
            src="/images/light.png"
            width={100}
            height={20}
            alt="image with cards"
          ></Image>
        </Container>
        <Container style={{ textAlign: "center", width: "640px" }}>
          <Container style={{ textAlign: "center", margin: "2em auto" }}>
            <h1 style={fontStyles}>Welcome Back</h1>
            <p style={fontStyles.secondaryFont}>Log in to your Linked List</p>
          </Container>
          <Container>
            <Grid.Column width={4}>
              <Formik
                initialValues={signInModel}
                validationSchema={signInValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("values", values);
                  // setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   setSubmitting(false);
                  // }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Field>
                      {errors.username && touched.username ? (
                        <div>
                          <p style={{ color: "#CA0C00", fontSize: "11px" }}>
                            {errors.username}
                          </p>
                        </div>
                      ) : null}
                      <Input
                        placeholder="Email or username"
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Field>
                    <Form.Field>
                      {errors.password && touched.password ? (
                        <div>
                          <p style={{ color: "#CA0C00", fontSize: "11px" }}>
                            {errors.password}
                          </p>
                        </div>
                      ) : null}
                      <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Field>
                    <Form.Field style={{ display: "inline-flex" }}>
                      <a style={fontStyles.links}>Forgot password?</a>
                      <span className="text-black">•</span>
                      <a style={fontStyles.links}>Forgot username?</a>
                    </Form.Field>
                    <button
                      type="submit"
                      style={{
                        width: "-webkit-fill-available",
                        borderRadius: "20px",
                      }}
                      className="ui primary button"
                    >
                      Log in
                    </button>
                  </Form>
                )}
              </Formik>

              <Container style={{ margin: "2em 0" }}>
                <p style={fontStyles.secondaryFont}>
                  {accountQuestion} <a href="/sign-up">Sign Up</a>
                </p>
              </Container>
            </Grid.Column>
          </Container>
        </Container>
      </Grid.Column>
      <Grid.Column
        width={6}
        style={{
          height: "auto",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: "url(images/signIn2.png)",
          display: width < 768 ? "none" : "",
        }}
      ></Grid.Column>
    </Grid>
  );
};
const fontStyles = {
  fontSize: "48px",
  letterSpacing: "-2px",
  fontWeight: "800",
  fontFamily: "__Inter_c0ea59",
  secondaryFont: {
    color: "rgb(103 107 95)",
  },
  links: {
    cursor: "pointer",
  },
};
export default SignInForm;

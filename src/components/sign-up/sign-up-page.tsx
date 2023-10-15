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
import { signUpModel } from "./sign-up-model";
import { signUpValidationSchema } from "./sign-up-validation-schema";
import Image from "next/image";
// import from ""
const SignUpForm = () => {
  const [enableButton, setEnableButton] = useState(false);

  const handleButtonClick = () => {
    setEnableButton(!enableButton);
  };
  const getIsMobile = () => window.innerWidth <= 768;

 function useIsMobile() {
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    return isMobile;
}
  const isMobile = useIsMobile();
  console.log(isMobile);
  return (
    <Grid stackable columns={2} style={{ height: "100%" }}>
      <Grid.Column width={10} style={{ padding: "0em 5em" }}>
        <Container style={{ textAlign: "start", margin: "1em auto" }}>
          <img
            src="/images/light.png"
            width={100}
            alt="image with cards"
          ></img>
        </Container>
        <Container style={{ textAlign: "center", width: "640px" }}>
          <Container style={{ textAlign: "center", margin: "2em auto" }}>
            <h1 style={fontStyles}>Join Linked List</h1>
            <p style={fontStyles.secondaryFont}>Yup! its Free!</p>
          </Container>
          <Container>
            <Grid.Column width={4}>
              <Formik
                initialValues={signUpModel}
                validationSchema={signUpValidationSchema}
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
                      {errors.email && touched.email ? (
                        <div>
                          <p style={{ color: "#CA0C00", fontSize: "11px" }}>
                            {errors.email}
                          </p>
                        </div>
                      ) : null}
                      <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Field>
                    <Form.Field>
                      {errors.username && touched.username ? (
                        <div>
                          <p style={{ color: "#CA0C00", fontSize: "11px" }}>
                            {errors.username}
                          </p>
                        </div>
                      ) : null}
                      <Input
                        label="my-linked-tree/"
                        placeholder="username"
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
                      <input type="checkbox" onClick={handleButtonClick} />
                      <p>
                        I agree to the <a>terms and conditions</a>
                      </p>
                    </Form.Field>
                    <button
                      type="submit"
                      disabled={!enableButton}
                      style={{
                        width: "-webkit-fill-available",
                        borderRadius: "20px",
                      }}
                      className="ui primary button"
                    >
                      Create Account
                    </button>
                  </Form>
                )}
              </Formik>

              <Container style={{ margin: "2em 0" }}>
                <p style={fontStyles.secondaryFont}>
                  Already have an account? <a href="">Log In</a>
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
          backgroundImage: "url(images/2.png)",
          display: isMobile? "none": ""
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
};
export default SignUpForm;

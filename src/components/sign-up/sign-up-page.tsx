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
import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { useRouter } from "next/navigation";

interface userDetails {
  username: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [enableButton, setEnableButton] = useState(false);
  const [error, setError] = useState("");
  const [paginate, setPaginate] = useState(false);
  const [route, setRoute] = useState("/sign-up");
  const router = useRouter();

  const handleButtonClick = () => {
    setEnableButton(!enableButton);
  };
  useEffect(() => {
    if (paginate) {
      setRoute("/");
    }
  }, [paginate]);

  const handleRegister = async (values: userDetails) => {
    try {
      const response = await axios
        .post("http://localhost:5000/sign-up", values)
        .then((res) => {
          console.log(values, res);
          if (res.status === 201) {
            // Navigate to the homepage after successful registration
            setPaginate(true);
          }
        });
      // if (response.status === 201) {
      //   // Navigate to the homepage after successful registration
      //   router.push('/');
      // }
      console.log(response);
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message);
        alert(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("An error occurred while making the request");
      }
    }
  };

  return (
    <Grid stackable columns={2} style={{ height: "100%" }}>
      <Grid.Column width={10} style={{ padding: "0em 5em" }}>
        <Container style={{ textAlign: "start", margin: "0em auto" }}>
          <Image
            src="/images/light.png"
            width={150}
            height={150}
            alt="image with cards"
          ></Image>
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
                  handleRegister(values);
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
                      onClick={() => router.push(route)}
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
          backgroundImage: "url(images/signup6.png)",
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

import React from "react";

import {
  Container,
  Button,
  Grid,
  Segment,
  //   Image,
  Header,
} from "semantic-ui-react";
import Image from "next/image";
import styles from "./styles/landing-styles.module.css";
const LandingPage = () => {
  return (
    <Container>
      <Container>
        <figure>
          <div
            className="wrapper"
            style={{
              alignItems: "center",
              display: "flex",
              height: "100%",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div className="widget">
                    <div className={styles.imageContainer}>
                      <Image
                        src="/images/1.png"
                        alt=""
                        width={300}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={styles.frontImage}
                      />
                      <Image
                        src="/images/2.png"
                        alt=""
                        width={300}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={styles.backImage}
                      />
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="widget">
                    <div className="inner">
                      <Image
                        src="/images/3.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                      />{" "}
                      <Image
                        src="/images/4.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                      />{" "}
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div className="widget">
                    <div className="inner">
                      <Image
                        src="/images/5.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                      />{" "}
                      <Image
                        src="/images/6.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                      />{" "}
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="widget">
                    <div className="inner">
                      <Image
                        src="/images/7.png"
                        alt=""
                        width={300}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                      />{" "}
                      <Image
                        src="/images/8.png"
                        alt=""
                        width={300}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>

              {/* <Grid.Row columns={3}>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid.Row> */}
            </Grid>
          </div>
        </figure>
      </Container>
    </Container>
  );
};
export default LandingPage;

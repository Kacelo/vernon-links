import React, { useEffect, useState } from "react";

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
  const [rotate, setRotate] = useState(false);
  const [rotateStates, setRotateStates] = useState([false, false, false, false]);

  const handleClick = (index:number) => {
    const newRotateStates = [...rotateStates];
    newRotateStates[index] = !rotateStates[index];
    setRotateStates(newRotateStates);
  };

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
            <Grid padded stackable>
              <Grid.Row verticalAlign="middle" >
                <Grid.Column width={5}>
                  <div onClick={() => handleClick(0)} className={styles.imageContainer}>
                    <Image
                      src="/images/1.png"
                      alt=""
                      width={300}
                      height={200}
                      style={{ borderRadius: "24px", objectFit: "cover" }}
                      className={
                        rotateStates[0]  ? styles.rotateFrontImage : styles.frontImage
                      }
                    />
                    <Image
                      src="/images/2.png"
                      alt=""
                      width={300}
                      height={200}
                      style={{ borderRadius: "24px", objectFit: "cover" }}
                      className={ rotateStates[0] ?  styles.rotateBackImage : styles.backImage }
                    />
                  </div>
                </Grid.Column>
                <Grid.Column width={3}>
                <div onClick={() => handleClick(1)} className={styles.imageContainer2}>
                    <div className="inner">
                      <Image
                        src="/images/3.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[1]  ? styles.rotateFrontImage2 : styles.frontImage2
                        }
                      />{" "}
                      <Image
                        src="/images/4.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={ rotateStates[1]   ?  styles.rotateBackImage2 : styles.backImage2 }

                      />{" "}
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3}>
                <div onClick={() => handleClick(2)} className={styles.imageContainer2}>
                    <div className="inner">
                      <Image
                        src="/images/5.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[2]  ? styles.rotateFrontImage2 : styles.frontImage2
                        }
                      />{" "}
                      <Image
                        src="/images/6.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={ rotateStates[2]   ?  styles.rotateBackImage2 : styles.backImage2 }
                      />{" "}
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column width={5}>
                <div onClick={() => handleClick(3)} className={styles.imageContainer}>
                    <div className="inner">
                      <Image
                        src="/images/7.png"
                        alt=""
                        width={300}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[3]  ? styles.rotateFrontImage : styles.frontImage
                        }
                      />{" "}
                      <Image
                        src="/images/8.png"
                        alt=""
                        width={300}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={ rotateStates[3]   ?  styles.rotateBackImage : styles.backImage }

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

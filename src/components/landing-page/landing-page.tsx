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
  const [rotateStates, setRotateStates] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [message, setMesasge] = useState('loading')

  useEffect(() => {
    fetch("http://localhost:5000/").then(response => response.json()).then(
      data =>{
        console.log(data)
        setMesasge(data);
      }
    )
  }, [])
  
  

  const handleClick = (index: number) => {
    const newRotateStates = [...rotateStates];
    newRotateStates[index] = !rotateStates[index];
    setRotateStates(newRotateStates);
  };

  // setInterval(()=>handleClick(0), 5000);
  // setInterval(()=>handleClick(1), 7000);
  // setInterval(()=>handleClick(2), 8000);
  // setInterval(()=>handleClick(3), 10000);

  return (
    <div style={{minHeight: "100vh"}}>
      <div className={styles.secondDiv}>
      <Grid stackable >
              <Grid.Row columns={2} className={styles.cardcolumn} reversed="computer tablet">
                <Grid.Column width={6}>
                  <div>
                    <h2 className={styles.cardSideHeading}>
                    Analyze your audience and keep your followers engaged
                    </h2>
                  </div>
                  <div>
                  <p style={{fontWeight:"400", fontSize:"clamp(16px, 2vmin, 20px)"}}>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
                  </div>
                  <div style={{margin:"48px 0"}}>
                    <Button style={{borderRadius:"20px"}} size="huge" as={"a"} href="/sign-in" color="pink">Get started for free</Button>
                  </div>
                </Grid.Column>
                <Grid.Column className={styles.cardCol} width={10}>
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
            {/* <Grid padded stackable>
              <Grid.Row verticalAlign="middle" columns={2} >
                <Grid.Column >
                  <div onClick={() => handleClick(0)} className={styles.imageContainer}>
                    <Image
                      src="/images/3.png"
                      alt=""
                      width={300}
                      height={200}
                      style={{ borderRadius: "24px", objectFit: "cover" }}
                      className={
                        rotateStates[0]  ? styles.rotateFrontImage : styles.frontImage
                      }
                    />
                    <Image
                      src="/images/1.png"
                      alt=""
                      width={300}
                      height={200}
                      style={{ borderRadius: "24px", objectFit: "cover" }}
                      className={ rotateStates[0] ?  styles.rotateBackImage : styles.backImage }
                    />
                  </div>
                </Grid.Column>
              
                <Grid.Column>
                <div onClick={() => handleClick(2)} className={styles.imageContainer2}>
                    <div className="inner">
                      <Image
                        src="/images/6.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[2]  ? styles.rotateFrontImage2 : styles.frontImage2
                        }
                      />{" "}
                      <Image
                        src="/images/5.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={ rotateStates[2]   ?  styles.rotateBackImage2 : styles.backImage2 }
                      />{" "}
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row verticalAlign="middle" columns={2}>  
              <Grid.Column >
                <div onClick={() => handleClick(1)} className={styles.imageContainer2}>
                    <div className="inner">
                      <Image
                        src="/images/8.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[1]  ? styles.rotateFrontImage2 : styles.frontImage2
                        }
                      />{" "}
                      <Image
                        src="/images/7.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={ rotateStates[1]   ?  styles.rotateBackImage2 : styles.backImage2 }

                      />{" "}
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column style={{width:"min-content"}}>
                <div onClick={() => handleClick(3)} className={styles.imageContainer}>
                    <div className="inner">
                      <Image
                        src="/images/4.png"
                        alt=""
                        width={300}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[3]  ? styles.rotateFrontImage : styles.frontImage
                        }
                      />
                      <Image
                        src="/images/2.png"
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
            </Grid> */}

            <div className={styles.visual}>
              <div className={styles.grid}>
                <div className={styles.widget}>
                  <div
                    onClick={() => handleClick(0)}
                    className={styles.imageContainer}
                  >
                    <Image
                      src="/images/3.png"
                      alt=""
                      width={300}
                      height={200}
                      style={{ borderRadius: "24px", objectFit: "cover" }}
                      className={
                        rotateStates[0]
                          ? styles.rotateFrontImage
                          : styles.frontImage
                      }
                    />
                    <Image
                      src="/images/1.png"
                      alt=""
                      width={300}
                      height={200}
                      style={{ borderRadius: "24px", objectFit: "cover" }}
                      className={
                        rotateStates[0]
                          ? styles.rotateBackImage
                          : styles.backImage
                      }
                    />
                  </div>
                </div>
                <div className={styles.widget}>
                  <div
                    onClick={() => handleClick(2)}
                    className={styles.imageContainer2}
                  >
                    <div className="inner">
                      <Image
                        src="/images/6.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[2]
                            ? styles.rotateFrontImage2
                            : styles.frontImage2
                        }
                      />{" "}
                      <Image
                        src="/images/5.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[2]
                            ? styles.rotateBackImage2
                            : styles.backImage2
                        }
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.grid}>
                <div className={styles.widget}>
                  <div
                    onClick={() => handleClick(1)}
                    className={styles.imageContainer2}
                  >
                    <div className="inner">
                      <Image
                        src="/images/8.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[1]
                            ? styles.rotateFrontImage2
                            : styles.frontImage2
                        }
                      />{" "}
                      <Image
                        src="/images/7.png"
                        alt=""
                        width={160}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[1]
                            ? styles.rotateBackImage2
                            : styles.backImage2
                        }
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className={styles.widget}>
                  <div
                    onClick={() => handleClick(3)}
                    className={styles.imageContainer}
                  >
                    <div className="inner">
                      <Image
                        src="/images/4.png"
                        alt=""
                        width={300}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[3]
                            ? styles.rotateFrontImage
                            : styles.frontImage
                        }
                      />{" "}
                      <Image
                        src="/images/2.png"
                        alt=""
                        width={300}
                        height={200}
                        style={{ borderRadius: "24px", objectFit: "cover" }}
                        className={
                          rotateStates[3]
                            ? styles.rotateBackImage
                            : styles.backImage
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
                </Grid.Column>
              </Grid.Row>
            </Grid>
      </div>
    
      
      </div>
  );
};
export default LandingPage;

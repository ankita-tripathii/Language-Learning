  import React from "react";
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import Container from "react-bootstrap/Container";
  import styles from "./about.module.css";
  import Image from 'react-bootstrap/Image';


  export default function About(){
    return(

       <Container>
              <Row>
                  <Col lg={6}>
                   <Row className={styles.heading}>
                    <h2> About us</h2>
                   </Row>
                   <Row>
                     <p className={styles.paragrapgtext}>
                      Welcome to Language Learning!
                      At Language Learning, we are passionate about empowering individuals to learn new languages and connect with the world. Our platform is designed to make 
                      language learning accessible, enjoyable, and effective for learners of all ages and backgrounds.
                     </p>
                   </Row>  
                  </Col>

                  <Col>
                    <Image src="aboutus.svg" fluid />
                  </Col>
              </Row>

              <hr/>

              <Row>
                <Col className={styles.heading} lg={12}>
                   <h2>Our Mission</h2>
                </Col>
                <Col lg={12}>
                  <p className={styles.paragrapgtext}>
                    Our mission is to break down language barriers and foster global understanding by providing high-quality language learning 
                    resources. We believe that learning a new language opens doors to new opportunities, enhances cultural appreciation, and promotes communication across borders.
                  </p>
                </Col>
              </Row>
              <hr/>

              <Row>
                 <Col lg={6}>
                   <Row>
                      <h2>Contact Us</h2>
                   </Row>
                   <Row> 
                        <p className={styles.paragrapgtext}>
                        Have questions or feedback? We'd love to hear from you! Feel free to contact us for inquiries, suggestions, or support. 
                        Your input helps us improve and better serve the language learning community.choosing Language Learning as your language learning partner. Let's embark on this exciting language learning journey together!</p>

                       <p className={styles.paragrapgtext}>
                       <text>
                        Warm regards,
                        <br/>
                        XYZ
                        <br/>
                        Founder, Language Learning
                        </text>
                        </p>
                   </Row>
                 </Col>
                 <Col>
                     <Image src="contactus.svg" fluid />
                 </Col>
              </Row>
        </Container>
      )
  }
  import React from "react";
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import Container from "react-bootstrap/Container";
  import Carousel from "react-bootstrap/Carousel";
  import styles from "./carousel.module.css";

  export default function FirstCarousel() {
    return (
    <Container>
    <Row>
    <Col>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={1000}>
        <div>
              <img
                src="learning2.svg"
                width="100%"
                height="400px"
                alt="language-learning"
              />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <div>
          <img
                src="learning1.svg"
                width="100%"
                height="400px"
                alt="language-learning"
              />
        </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <div>
          <img
                src="learning3.svg"
                width="100%"
                height="400px"
                alt="language-learning"
              />
          </div>
        </Carousel.Item>
      </Carousel>
      </Col>
      </Row>
      </Container>
    );
  }


	import React from "react";
	import Row from 'react-bootstrap/Row';
	import Col from 'react-bootstrap/Col';
	import Container from "react-bootstrap/Container";
	import Image from 'react-bootstrap/Image';
	import styles from "./detail.module.css";

	export default function Details() {
			  return (
	           
	          <Container>
	            <Row>
	                <Col lg={6}>
	                 <Row className={styles.heading}>
	                  <h2> Why you choose us</h2>
	                 </Row>
	                 <Row>
	                   <p className={styles.paragrapgtext}>
	                    you have chosen our language learning app for several compelling reasons. First and foremost, our website offers a comprehensive and well-structured curriculum that caters to learners of all levels,
	                    from beginners to advanced speakers. The variety of languages available is impressive. our user-friendly interface and interactive features, such as quizzes, flashcards, and pronunciation guides, make the learning process engaging and enjoyable.
	                    Additionally, the ability to track my progress and set personalized goals keeps me motivated and on track to achieve fluency.
	                   </p>
	                 </Row>  
	                </Col>

	                <Col>
	                  <Image src="learning5.svg" fluid />
	                </Col>
	            </Row>
	          </Container>

			  	);
			}
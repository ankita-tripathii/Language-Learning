import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Card from "react-bootstrap/Card";
import styles from "./languagelist.module.css";
import languagelist from './data.json'; // Import the JSON data 
import LanguageviewModal from "../viewmodal/languageViewModal";


export default function Languagelist() {
  const [languageData, setlanguageData] = useState(languagelist);

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedCard, setSelectedCard] = useState(null); // State to store selected card data

  // Function to open the modal and set the selected card data
  const openModal = (item) => {
    setSelectedCard(item);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedCard(null);
    setShowModal(false);
  };
  return (
      <Container>
        <Row className={styles.heading}>
          <Col>
            <h2> I Want To Learn </h2>
          </Col>
        </Row>

        <Row>
         <Col className={styles.cardContainer}>
          {languageData.map((item, index) => (

            <div key={index} className={styles.card} onClick={() => openModal(item)}>

              <Card>
                <div className={styles.imgcontainer}>
                  <Card.Img
                    className={styles.imgr}
                    variant="top"
                    src={item.img}
                  />
                </div>
                <hr/>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.info}</Card.Text>
                  <Button style={{backgroundColor:"#219C90"}}>Learn</Button>
                </Card.Body>
              </Card>

            </div>
          ))}
        </Col>
      </Row>
      
      {/* Render the LanguageModal component with props */}
      <LanguageviewModal
        show={showModal}
        onHide={closeModal}
        selectedCard={selectedCard}
      />
    </Container>
    );
  }


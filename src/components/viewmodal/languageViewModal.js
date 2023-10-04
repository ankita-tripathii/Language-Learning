import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import styles from "./languageViewModal.module.css";
import Button from "react-bootstrap/Button";

export default function LanguageviewModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
       <Container>
            <Modal.Header>
             <Row>
               <Col>
                 <Modal.Title id="contained-modal-title-vcenter">
                   <h2>{props.selectedCard && props.selectedCard.name}</h2>
                 </Modal.Title>
              </Col>
             </Row>
            </Modal.Header>
            <Modal.Body>
              <Row>
                  {props.selectedCard && (
                  <>
                    <Col lg={5}> <img src={props.selectedCard.img} alt={props.selectedCard.name} className={styles.imgr}/> </Col>
                    <Col lg={7}> <p>{props.selectedCard.info}</p> </Col>
                  </>
                   )}
              </Row>
           </Modal.Body>
       <Row>
         <Col>
           <Modal.Footer>
             <Button variant="secondary" onClick={props.onHide}>Close</Button>
           </Modal.Footer>
         </Col>
       </Row>
        </Container>
    </Modal>
  );
}


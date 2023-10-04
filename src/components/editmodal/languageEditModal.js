import React from "react";
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./languageEditModal.module.css";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function LanguageeditModal (props){
  const [name, setName] = useState(props.selectedCard ? props.selectedCard.name : "");
  const [info, setInfo] = useState(props.selectedCard ? props.selectedCard.info : "");
  const [image, setImage] = useState(props.selectedCard ? props.selectedCard.img : "");

  const handleUpdate = () => {
    // Perform validation or other necessary checks before updating the data
    const updatedLanguage = {
      ...props.selectedCard,
      name: name,
      info: info,
      img: image,
    };

    props.onUpdate(updatedLanguage); // Call the onUpdate function from the parent component
    props.onHide(); // Close the sliding pane after updating
  };

  return (
    <SlidingPane
      {...props}
      isOpen={props.show}
      title="Edit Language"
      from="right"
      onRequestClose={props.onHide} >
      <Container>
             <Form>
                <Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Language Name</Form.Label>
                      <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter new language name" />
                      <Form.Text className="text-muted">
                        Please enter a valid language name.
                      </Form.Text>
                    </Form.Group>
                 </Row>

                 <Row>
                   <Col>
                     <Form.Group className="mb-3" >
                      <Form.Label>Information</Form.Label>
                      <Form.Control as="textarea" aria-label="With textarea" value={info} onChange={(e) => setInfo(e.target.value)} placeholder="enter language descriptions" />
                     </Form.Group>
                    </Col> 
                 </Row>

                 <Row>
                      <Form.Group className="mb-3" controlId="formFile">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="enter language country flag image" />
                      </Form.Group>
                  </Row> 
                  <Row>
                   <Col lg={3}>   
                     <Button variant="primary" type="submit" onClick={handleUpdate}>Update</Button>
                     </Col>
                  </Row>   
              </Form>
      </Container>
    </SlidingPane>
  );
}


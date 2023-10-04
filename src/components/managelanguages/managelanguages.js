  import React from "react";
  import Navbarexample from "../navbar/navbar";
  import FooterExample from "../footer/footer";
  import { useState } from 'react';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import Container from "react-bootstrap/Container";
  import Table from 'react-bootstrap/Table';
  import Image from 'react-bootstrap/Image';
  import Button from 'react-bootstrap/Button';
  import ButtonGroup from 'react-bootstrap/ButtonGroup';
  import styles from "./managelanguages.module.css";
  import languagelists from '../languagelist/data.json'; // Import the JSON data 
  import LanguageviewModal from "../viewmodal/languageViewModal";
  import LanguageeditModal from "../editmodal/languageEditModal";



  export default function Managelanguages() {

    const [languageData, setlanguageData] = useState(languagelists);

    const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedCard, setSelectedCard] = useState(null); // State to store selected card data
  const [editModalShow, setEditModalShow] = useState(false);

  // Function to open the modal and set the selected card data
  const openViewModal = (item) => {
    setSelectedCard(item);
    setShowModal(true);
  };

  // Function to close the modal
  const closeViewModal = () => {
    setSelectedCard(null);
    setShowModal(false);
  };

  const openEditModal = (item) => {
    setSelectedCard(item);
    setEditModalShow(true);
  };

  const closeEditModal = () => {
    setSelectedCard(null);
    setEditModalShow(false);
  };

  const handleUpdate = (updatedLanguage) => {
    // Update the languageData state with the updated language object
    const updatedData = languageData.map((item) =>
      item.id === updatedLanguage.id ? updatedLanguage : item
    );
    setlanguageData(updatedData);
  };

    return (
      <>
      <Navbarexample />  
      <Container>
        <Row sticky="top">
          <Col>
              <h2 className={styles.heading}>Language List</h2>
          </Col>
        </Row>
        <hr/>
        <Row>
           <Table striped bordered hover>
             <thead  className={styles.tableheading} sticky="top">   
               <tr> 
                  <th>Serial_No</th>
                  <th>Language Name</th>
                  <th>Image</th> 
                  <th>Information</th> 
                  <th>Manage Languages</th>  
                </tr>
             </thead>
             <tbody>
               {languageData.map((item, index) => (
               <tr  key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><Image src={item.img} rounded className={styles.imgr}/></td>
                <td>{item.info}</td>
                <td><ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" onClick={() => openViewModal(item)}>View</Button>
                            <Button variant="secondary" onClick={() => openEditModal(item)}>Edit</Button>
                     </ButtonGroup>       
                </td>
               </tr>
               ))}
             </tbody>
          </Table>
        </Row>

      <LanguageviewModal
        show={showModal}
        onHide={closeViewModal}
        selectedCard={selectedCard}
      />

      {selectedCard && (
        <LanguageeditModal
          show={editModalShow}
          onHide={closeEditModal}
          selectedCard={selectedCard}
          onUpdate={handleUpdate}
        />
      )}
      
      </Container>
      <FooterExample />
       </>
      )
  }
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    displayContacts();
  }, []); // Sans les crochets ça tourne en boucle

  const displayContacts = async () => {
    await axios.get("http://localhost:8000/api/contacts").then((res) => {
      setContacts(res.data);
      console.log(res.data);
    });
  };

  const deleteContact = (id) => {
    axios.delete(`http://localhost:8000/api/contacts/${id}`).then(displayContacts);
  };

  return (
    <div>
      <Logo />
      <Menu />
      
      <div className="container mt-5">
      
        <Table striped bordered hover className="text-center align-middle">
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.firstnameContact}</td>
                <td>{contact.lastnameContact}</td>
                <td>{contact.emailContact}</td>
                <td>{contact.messageContact}</td>
                <td>
                  <Button
                  className="m-1"
                    variant="danger"
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Contacts;

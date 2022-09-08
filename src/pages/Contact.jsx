import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const navigate = useNavigate();

  const [firstnameContact, setFirstnameContact] = useState("");
  const [lastnameContact, setLastnameContact] = useState("");
  const [messageContact, setMessageContact] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [validationError, setValidationError] = useState({});

  //Fonction d'ajout de club
  const Contact = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("firstnameContact", firstnameContact);
    formData.append("lastnameContact", lastnameContact);
    formData.append("messageContact", messageContact);
    formData.append("emailContact", emailContact);

    await axios
      .post(`http://localhost:8000/api/contacts`, formData)
      .then(navigate("/home"))
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };

  return (
    <section>
      <Logo />
      <Menu />
      <div className="container">
        <div className="row justify-content-center register">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="cardRegister">
              <div className="card-body">
                <h4 className="card-title text-center">Contactez-nous <FaEnvelope /></h4>
                <hr />
                <div className="form-wrapper">
                  {Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {Object.entries(validationError).map(
                              ([key, value]) => (
                                <li key={key}>{value}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  <Form onSubmit={Contact} className="form-regist">

                    <Row>
                      <Col>
                        <Form.Group controlId="FirstnameContact">
                          <Form.Label></Form.Label>
                          <Form.Control className="form-control"
                            type="text"
                            value={firstnameContact}
                            placeholder="Votre prénom"
                            onChange={(event) => {
                              setFirstnameContact(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="LastnameContact">
                          <Form.Label></Form.Label>
                          <Form.Control className="form-control"
                            type="text"
                            value={lastnameContact}
                            placeholder="Votre nom"
                            onChange={(event) => {
                              setLastnameContact(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Email">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="email"
                            value={emailContact}
                            placeholder="Votre email"
                            onChange={(event) => {
                              setEmailContact(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>


                    <Row>
                      <Col>
                        <Form.Group
                          className="mb-3"
                          controlId="Content"
                        >
                          <Form.Label>Contenu de l'article</Form.Label>
                          <Form.Control 
                          as="textarea" 
                          rows={7}
                          value={messageContact}
                          onChange={(event) => {
                            setMessageContact(event.target.value);
                          }}
                          />
                        </Form.Group>

                      </Col>
                    </Row>

                    
                    <Button
                      variant="primary"
                      className="mt-3 mb-2"
                      size="lg"
                      block="block"
                      type="submit"
                    >
                      Envoyer
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
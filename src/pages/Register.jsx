import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [validationError, setValidationError] = useState({});

  //Fonction d'ajout de club
  const Register = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", password_confirmation);

    await axios
      .post(`http://localhost:8000/api/auth/register`, formData)
      .then(navigate("/home"))
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };

  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">S'inscrire</h4>
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
                  <Form onSubmit={Register}>

                    <Row>
                      <Col>
                        <Form.Group controlId="Name">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            value={name}
                            placeholder="Votre nom"
                            onChange={(event) => {
                              setName(event.target.value);
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
                            value={email}
                            placeholder="Votre email"
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Password">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="password"
                            value={password}
                            placeholder="Mot de passe"
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Password_confirmation">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="password"
                            value={password_confirmation}
                            placeholder="Confirmation mot de passe"
                            onChange={(event) => {
                              setPassword_confirmation(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Button
                      variant="primary"
                      className="mt-2"
                      size="lg"
                      block="block"
                      type="submit"
                    >
                      S'inscrire
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../../../components/Logo";
import Menu from "../../../components/Menu";
import Footer from "../../../components/Footer";

const AddEventType = () => {
  const navigate = useNavigate();

  const [nameEventType, setNameEventType] = useState("");
  const [validationError, setValidationError] = useState({});

  //Fonction d'ajout de club
  const AddEventType = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nameEventType", nameEventType);

    await axios
      .post(`http://localhost:8000/api/event_types`, formData)
      .then(navigate("/dashboard/eventTypes"))
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };

  return (
    <div>
      <Logo />
      <Menu />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Création d'un nouveau type d'évènement</h4>
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
                  <Form onSubmit={AddEventType}>
                    <Row>
                      <Col>
                        <Form.Group controlId="Name">
                          <Form.Label>Nom du type d'évènement</Form.Label>
                          <Form.Control
                          className="mb-3"
                            type="text"
                            value={nameEventType}
                            onChange={(event) => {
                              setNameEventType(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      variant="primary"
                      size="lg"
                      block="block"
                      type="submit"
                    >
                      Créer le type d'évènement
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddEventType;

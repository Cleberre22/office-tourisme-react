import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/Menu";
import Footer from "../../../components/Footer";

const AddPlaceType = () => {
  const navigate = useNavigate();

  const [namePlaceType, setNamePlaceType] = useState("");
  const [validationError, setValidationError] = useState({});

  //Fonction d'ajout de club
  const AddPlaceType = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("namePlaceType", namePlaceType);

    await axios
      .post(`http://localhost:8000/api/place_types`, formData)
      .then(navigate("/dashboard/placeTypes"))
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Création d'un nouveau type de lieu</h4>
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
                  <Form onSubmit={AddPlaceType}>
                    <Row>
                      <Col>
                        <Form.Group controlId="Name">
                          <Form.Label>Nom du type de lieu</Form.Label>
                          <Form.Control
                            type="text"
                            value={namePlaceType}
                            onChange={(event) => {
                              setNamePlaceType(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      variant="primary"
                      className="mt-3"
                      size="lg"
                      block="block"
                      type="submit"
                    >
                      Créer le type de lieu
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

export default AddPlaceType;

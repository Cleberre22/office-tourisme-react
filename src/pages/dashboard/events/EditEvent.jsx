import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../../components/Menu";
import Logo from "../../../components/Logo";

const EditEvent = () => {

  const { event } = useParams();
  const navigate = useNavigate();

  const [nameEvent, setNameEvent] = useState("");
  const [descriptionEvent, setDescriptionEvent] = useState("");
  const [imageEvent, setImageEvent] = useState("");
  const [priceEvent, setPriceEvent] = useState();
  const [startDateEvent, setStartDateEvent] = useState("");
  const [endDateEvent, setEndDateEvent] = useState("");
  const [places_id, setPlaces_id] = useState("");
  const [event_types_id, setEvent_types_id] = useState("");
  const [nameEventType, setNameEventType] = useState([]);
  const [namePlace, setNamePlace] = useState([]);

  const [eventTypes, setEventTypes] = useState([]);
  const [places, setPlaces] = useState([]);

  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    getEvent();
    getEventTypes();
    getPlaces();
  }, []);

  const changeHandler = (event) => {
    setImageEvent(event.target.files[0]);
  };

  const handleChange1 = (event) => {
    setEvent_types_id(event.target.value);
    console.log(event_types_id);
    console.log(event.target.value);
  };

  const handleChange2 = (event) => {
    setPlaces_id(event.target.value);
    console.log(places_id);
    console.log(event.target.value);
  };

  // GET - Récupère les valeurs de la fiche avec l'API
  const getEvent = async () => {
    await axios
      .get(`http://localhost:8000/api/events/${event}`)
      .then((res) => {
        console.log(res.data);
        setNameEvent(res.data[0].nameEvent);
        setDescriptionEvent(res.data[0].descriptionEvent);
        setImageEvent(res.data[0].imageEvent);
        setPriceEvent(res.data[0].priceEvent);
        setStartDateEvent(res.data[0].startDateEvent);
        setEndDateEvent(res.data[0].endDateEvent);
        setNameEventType(res.data[0].nameEventType);
        setNamePlace(res.data[0].namePlace);

        setDescriptionEvent(res.data[0].descriptionEvent);

      })
      .catch((error) => {
        console.log(error);
      });
  };

    //Méthode pour récupérer les clubs
    const getEventTypes = async () => {
      await axios.get("http://localhost:8000/api/event_types").then((res) => {
        setEventTypes(res.data);
      });
    };
       //Méthode pour récupérer les clubs
    const getPlaces = async () => {
      await axios.get("http://localhost:8000/api/places").then((res) => {
        setPlaces(res.data);
      });
    };

  //Fonction d'ajout de club
  const updateEvent = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("nameEvent", nameEvent);
    formData.append("descriptionEvent", descriptionEvent);
    formData.append("event_types_id", event_types_id);
    formData.append("places_id", places_id);
    formData.append("imageEvent", imageEvent);
    formData.append("priceEvent", priceEvent);
    formData.append("nameEventType", nameEventType);
    formData.append("namePlace", namePlace);
    formData.append("startDateEvent", startDateEvent);
    formData.append("endDateEvent", endDateEvent);
    
    await axios
      .post(`http://localhost:8000/api/events/${event}`, formData)
      .then(navigate("/dashboard/events"))
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
                <h4 className="card-title">Modifier un évènement</h4>
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
                  <Form onSubmit={updateEvent}>

                    <Row>
                      <Col>
                        <Form.Group controlId="EventType">
                          <Form.Label>Type d'évènement</Form.Label>
                          <Form.Select
                            className="mb-3"
                            aria-label="Default select example"
                            onChange={handleChange1}
                          >
                           <option value={event_types_id}>
                                {nameEventType}
                              </option>
                            {eventTypes.map((eventType) => (
                              <option key={eventType.id} value={eventType.id}>
                                {eventType.nameEventType}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Places">
                          <Form.Label>Lieu de l'évènement</Form.Label>
                          <Form.Select
                           className="mb-3"
                            aria-label="Default select example"
                            onChange={handleChange2}
                          >
                            <option value={places_id}>
                                {namePlace}
                              </option>
                            {places.map((place, index) => (
                              <option key={index} value={place.id}>
                                {place.namePlace}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Name">
                          <Form.Label>Nom de l'évènement</Form.Label>
                          <Form.Control
                           className="mb-3"
                            type="text"
                            value={nameEvent}
                            onChange={(event) => {
                              setNameEvent(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="Description">
                          <Form.Label>Description de l'évènement</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            value={descriptionEvent}
                            onChange={(event) => {
                              setDescriptionEvent(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="Price">
                          <Form.Label>Prix de l'évènement</Form.Label>
                          <Form.Control
                           className="mb-3"
                            type="number"
                            value={priceEvent}
                            onChange={(event) => {
                              setPriceEvent(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="StartDateEvent">
                          <Form.Label>Date de début</Form.Label>
                          <Form.Control
                           className="mb-3"
                            type="date"
                            value={startDateEvent}
                            onChange={(event) => {
                              setStartDateEvent(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="EndDateEvent">
                          <Form.Label>Date de fin</Form.Label>
                          <Form.Control
                           className="mb-3"
                            type="date"
                            value={endDateEvent}
                            onChange={(event) => {
                              setEndDateEvent(event.target.value);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="ImageEvent" className="mb-3">
                          <Form.Label>Image</Form.Label>
                          <Form.Control type="file" onChange={changeHandler} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      variant="primary"
                      size="lg"
                      block="block"
                      type="submit"
                    >
                      Modifier l'évènement
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

export default EditEvent;

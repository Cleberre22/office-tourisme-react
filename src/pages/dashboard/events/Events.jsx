import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [places, setPlaces] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);

  useEffect(() => {
    displayEvents();
    displayPlaces();
    displayPlaceTypes();
  }, []); // Sans les crochets ça tourne en boucle

  const displayEvents = async () => {
    await axios.get("http://localhost:8000/api/events").then((res) => {
      setEvents(res.data);
      console.log(res.data);
    });
  };

  const displayPlaces = async () => {
    await axios.get("http://localhost:8000/api/places").then((res) => {
      setPlaces(res.data);
      console.log(res.data);
      console.log(places);
    });
  };

  const displayPlaceTypes = async () => {
    await axios.get("http://localhost:8000/api/event_types").then((res) => {
      setEventTypes(res.data);
      // console.log(res.data);
    });
  };

  const deleteEvent = (id) => {
    axios.delete(`http://localhost:8000/api/events/${id}`).then(displayEvents);
  };

  return (
    <div>
      <Logo />
      <Menu />
      
      <div className="container mt-5">
      <Link to={`/dashboard/events/add`} className="btn btn-primary mb-4">
        Ajouter un nouvel évènement
      </Link>
        <Table striped bordered hover className="text-center align-middle">
          <thead>
            <tr>
              <th>Nom de l'évènement</th>
              <th>Type de l'évènement</th>
              <th>Lieu de l'évènement</th>
              <th>Description de l'évènement</th>
              <th>Prix de l'évènement</th>
              <th>Date de début</th>
              <th>Date de fin</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.nameEvent}</td>
                <td>{event.nameEventType}</td>
                <td>{event.namePlace}</td>
                <td>{event.descriptionEvent}</td>
                <td>{event.priceEvent}</td>
                <td>{event.startDateEvent}</td>
                <td>{event.endDateEvent}</td>
                
                <td>
                  <img
                    src={`http://localhost:8000/storage/uploads/${event.imageEvent}`}
                    width="75px"
                  />
                </td>
                <td>
                  <Link
                    to={`/dashboard/events/edit/${event.id}`}
                    className="btn btn-success"
                  >
                    Modifier
                  </Link>
                  <Button
                  className="m-1"
                    variant="danger"
                    onClick={() => {
                      deleteEvent(event.id);
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

export default Events;

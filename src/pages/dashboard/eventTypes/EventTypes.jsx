import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";

const EventTypes = () => {
  const [eventTypes, setEventTypes] = useState([]);

  useEffect(() => {
    displayEventTypes();
  }, []); // Sans les crochets ça tourne en boucle

  const displayEventTypes = async () => {
    await axios.get("http://localhost:8000/api/event_types").then((res) => {
      setEventTypes(res.data);
      console.log(res.data);
    });
  };
  
  const deleteEventType = (id) => {
    axios
      .delete(`http://localhost:8000/api/event_types/${id}`)
      .then(displayEventTypes);
  };

  return (
    <div>
      <Menu />
      <Link to={`/dashboard/eventTypes/add`} className="btn btn-primary me-2 m-3">
        Ajouter un nouveau type d'évènement
      </Link>
      <div className="container mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom du type d'évènement</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventTypes.map((eventType) => (
              <tr key={eventType.id}>
                <td>{eventType.nameEventType}</td>
                <td>
                  <Link
                    to={`/dashboard/eventTypes/edit/${eventType.id}`}
                    className="btn btn-success me-2"
                  >
                    Modifier
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteEventType(eventType.id);
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

export default EventTypes;
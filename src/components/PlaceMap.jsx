import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const PlaceMap = () => {

    const [places, setPlaces] = useState([]);
  
    useEffect(() => {
      displayPlaces();
    
    }, []); // Sans les crochets ça tourne en boucle
  
    const displayPlaces = async () => {
      await axios.get("http://localhost:8000/api/places").then((res) => {
        setPlaces(res.data);
        console.log(res.data);
      });
    };

  return (
    <div>
      <MapContainer
        center={[47.27227057515833, -2.205370638084083]}
        zoom={13}
        scrollWheelZoom={false}
        className="leaflet-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((place) => (
          <Marker
            key={place.id}
            position={[place.latitudePlace, place.longitudePlace]}
          >
            <Popup>{place.namePlace}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default PlaceMap;

import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/restaurant.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});







const Home = () => {
  const [places, setPlaces] = useState([]);
  return (
    <div>
      <Menu />

      <section className="placeMap ">
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
{places.map(place => (
          <Marker
            key={place.id}
            position={[
              place.latitudePlace,
              place.longitudePlace,
            ]}
          >
            <Popup>{place.namePlace}</Popup>
          </Marker>
           ))}
          {/* <Marker position={[47.27227057515833, -2.205370638084083]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </MapContainer>
      </section>
    </div>
  );
};

export default Home;

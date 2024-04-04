import React, {useState} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../../assets/data.json";
import Markers from "./VenueMarkers";

const MapView = ({current}) => {
  const [currentLocation] = useState({lat: 52.52437, lng: 13.41053});
  const [zoom] = useState(12);
  console.log(current);
  return (
    <MapContainer center={currentLocation} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers current={current} />
    </MapContainer>
  );
};

export default MapView;

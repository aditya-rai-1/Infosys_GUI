import React, {useState} from "react";
import {useEffect} from "react";
import MapView from "../maps/MapView";
import data from "../../assets/data.json";
import Shipment from "./Shipment";
import {useContext} from "react";

function Dashboard() {
  const [shipments, setShipments] = useState(data.shipments);
  const [currentShipment, setcurrentShipment] = useState({});

  const handleClick = shipment => {
    setcurrentShipment(shipment);
  };
  return (
    <div className="grid grid-cols-3 gap-4 my-2">
      <div className="flex flex-col gap-4">
        {/* THIS IS FOR THE CARDS */}
        {shipments &&
          shipments.map((shipment, index) => {
            return <Shipment shipment={shipment} key={index} index={index} setcurrentShipment={setcurrentShipment} />;
          })}
      </div>

      <div className="col-span-2">{currentShipment.shipment ? <MapView current={currentShipment} /> : <></>}</div>
    </div>
  );
}

export default Dashboard;

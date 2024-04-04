import React, {useState} from "react";
import {useEffect} from "react";
import data from "../../assets/data.json";
import Order from "./Order";
import {useContext} from "react";

function Orders() {
  const [shipments, setShipments] = useState(data.shipments);
  const [currentShipment, setcurrentShipment] = useState({});

  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex flex-col gap-4">
        {shipments &&
          shipments.map((shipment, index) => {
            return <Order shipment={shipment} key={index} index={index} setcurrentShipment={setcurrentShipment} />;
          })}
      </div>
    </div>
  );
}

export default Orders;

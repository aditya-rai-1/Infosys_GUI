import React, {useContext} from "react";
import {createContext, useState} from "react";
export const ShipmentContext = createContext();

const ShipmentProvider = props => {
  const [currentShipment, setCurrentShipment] = useState({});
  return (
    <ShipmentContext.Provider value={{currentShipment, setCurrentShipment}}>{props.childrens}</ShipmentContext.Provider>
  );
};

export default ShipmentProvider;

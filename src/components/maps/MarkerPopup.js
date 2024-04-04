import React from "react";
import {Popup} from "react-leaflet";

const MarkerPopup = props => {
  const {shipment} = props.data;

  return (
    <Popup>
      <div className="popup-text">{shipment}</div>
    </Popup>
  );
};

export default MarkerPopup;

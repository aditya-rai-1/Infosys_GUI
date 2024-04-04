import React from "react";
import {Marker} from "react-leaflet";
import {VenueLocationIcon} from "./VenueLocation";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = props => {
  const {venues, current} = props;
  // const markers = venues.map((venue, index) => (
  //   <Marker
  //     key={index}
  //     position={venue.geometry}
  //     icon={VenueLocationIcon}
  //   >
  //     <MarkerPopup data={venue}/>
  //   </Marker>
  // ));

  // return <>{markers}</>;
  console.log(current);
  return (
    <Marker position={[Number(current.latitude), Number(current.longitude)]} icon={VenueLocationIcon}>
      <MarkerPopup data={current} />
    </Marker>
  );
};

export default VenueMarkers;

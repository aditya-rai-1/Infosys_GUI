import React from "react";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

function Order({shipment, key, index, setcurrentShipment}) {
  const navigate = useNavigate();

  const handleClick = shipment_current => {
    setcurrentShipment(shipment_current);
  };

  return (
    <div className="bg-gray-300 rounded-lg p-2 px-5 mx-3 border shadow-md text-center cursor-pointer">
      <div
        className="bg-gray-300 rounded-lg p-1 px-3 mx-2 border shadow-md text-center"
        onClick={() => handleClick(shipment)}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/c524/d55c/9907306c75317a38c0e0a31287ce1c59?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsMKd7FYoV8uHB3~6tNRvKlosW~cMfDCoBTEk4xAbvQ5KSr2t1AiT--bi7e9yCeTwu0NEv5R~SKQ92xYdHNG06ypIglsvHY1lw4W31eN9PSbav0v2vSdW60HnO3e174oTqhvh5J8KgCPQnOyFVwfJwBjMl4ZXC2fd4MDcMfxabmyU~2MYOgZJ0sW0WmERVgW5zLAMWmk8zzfHSgxFAImcvK~5UCYBFzun5LUmZDrx3iX3-Hh2OIlPrzcfVvQ2sk7FQYNiHbgaw5UyEtD-WvuId375wiwfYNVeeQNzoMrNiLV0Y8IvI-uH6Y36LsbxeDAo99k3Mkzn8a25O6lOLRNjA__"
          className="mx-auto max-h-20"
          alt="Your Image"
        />
      </div>
      <div className="font-sans">
        <p>{`Order ${index + 1}`}</p>
        <p className="text-[#7B7B7B]">{shipment.shipment}</p>
        <p className="text-[#7B7B7B]">ABC</p>
      <button
        className="bg-[#4F80E1] text-white rounded-md p-2 h-10 mr-5 mb-4 sm:mb-0"
        onClick={() => navigate("/supplierdocuments")}
      >View Details</button>
      </div>
    </div>
  );
}

export default Order;

import axios from "axios";
import Navbar from "./navbar/navbar.jsx";
import {useEffect, useState} from "react";
import Quality from "./Quality.jsx";

function Quality_parent() {
  const [viewQuality, setViewQuality] = useState(false);

  const handleClick = () => {
    setViewQuality(!viewQuality);
  };

  const [presentQuality, setPresentQuality] = useState(60);
  const [expectedQuality, setExpectedQuality] = useState(72);

  // useEffect( () => {
  //   setPresentQuality(70);
  // }, []);

  // useEffect(async () => {
  //   await axios.get('http://10.29.8.91/shipment/all')
  //   .then((res) => {
  //     const resData = JSON.parse(res.data);
  //     console.log(resData);
  //     setExpectedQuality(resData);
  //   }).catch((err) => {
  //     console.log(err);
  //   });

  //   // await axios.get("present date api").
  //   // then((res) => {
  //   //   const resData = JSON.parse(res.data);
  //   //   console.log(resData);
  //   //   setPresentQuality(resData);
  //   // }).catch((err) => {
  //   //   console.log(err);
  //   // });

  // }, []);

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="flex flex-col sm:flex-row justify-around items-center border-b">
          <div className="flex flex-col items-center sm:items-center py-5">
            <h2 className="text-xl font-bold mb-2 sm:mb-0 sm:mr-2">Freight ID 1</h2>
            <p className="text-[#7B7B7B]">ABC 6516154854</p>
          </div>
          <button className="bg-[#4F80E1] text-white rounded-md p-2 h-10 mb-4 sm:mb-0" onClick={handleClick}>
            Check Quality
          </button>
        </div>

        {viewQuality && (
          <div className="flex flex-col md:flex-row gap-4 m-4 justify-center items-center">
            <Quality title={"Present Quality Level"} quality={presentQuality} />
            <Quality title={"Expected Quality Level"} quality={expectedQuality} />
          </div>
        )}

        {viewQuality && (
          <div className="mb-4">
            <h2 className="text-center text-2xl font-bold">Acceptable Quality Level 63-68%</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default Quality_parent;

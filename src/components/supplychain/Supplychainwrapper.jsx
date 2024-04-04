import React from "react";
import Navbar from "../navbar/navbar";
import Supplychain from "./Supplychain";
import { useNavigate } from "react-router-dom";

export const Supplychainwrapper = () => {
    const navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-row align-center justify-around items-center border-b">
          <div className="flex flex-row items-center w-full h-fit py-5 justify-between pr-10 pl-10">
            <h2 className="text-xl font-bold mx-2">SHIPMENTS</h2>
            <div className="flex">
              <button className="bg-gray-300 rounded-lg p-2 px-5 mx-2 border shadow-md" onClick={() => (navigate('/AddSC'))}>Create New</button>
            </div>
          </div>
          {/* <button className='bg-[#4F80E1] text-white rounded-md p-2 h-10' onClick={handleClick}>Check Quality</button> */}
        </div>
        <div className="px-10 max-w-[40%]">
          <Supplychain />
        </div>

        {/* {viewQuality ? <>
        <div className='flex gap-4 m-4 justify-center'>
          <Analytics title={"Present Quality Level"} />
          <Analytics title={"Expected Quality Level"} />
        </div>
        <div>
          <h2 className="text-center text-2xl font-bold">Acceptable Quality Level 63-68%</h2>
        </div>
      </>
        : null} */}
      </div>
    </>
  );
};

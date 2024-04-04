import Navbar from "./components/navbar/navbar.jsx";
import Analytics from "./components/analytics/Analytics.jsx";
import {useEffect, useState} from "react";
import Dashboard from "./components/order_tracing/Dashboard.jsx";
import "./App.css";
import ShipmentProvider from "./context/ShipContext.js";
import { useStateValue } from "./context/StateProvider.jsx";
import { useNavigate } from "react-router-dom";
function Home() {
  const [viewQuality, setViewQuality] = useState(false);
  const handleClick = () => {
    setViewQuality(!viewQuality);
  };
  const navigate = useNavigate();
  const [token, dispatch] = useStateValue();
  // useEffect(() => {
  //   // console.log(token);
  //   if(!token.token){
  //     navigate('/login');
  //   }
  // }, [])
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-row align-center justify-around items-center border-b">
          <div className="flex flex-row align-center items-center h-fit py-5 justify-center">
            <h2 className="text-xl font-bold mx-2">SHIPMENTS</h2>
            <div className="flex">
              <button className="bg-gray-300 rounded-lg p-2 px-5 mx-2 border shadow-md">In Transit</button>
              <button className="bg-gray-300 rounded-lg p-2 px-5 mx-2 border shadow-md">Completed</button>
            </div>
          </div>
          {/* <button className='bg-[#4F80E1] text-white rounded-md p-2 h-10' onClick={handleClick}>Check Quality</button> */}
          <div>
            <button className="bg-gray-300 rounded-lg p-2 px-5 mx-3 border shadow-md">Sort</button>
            <button className="bg-gray-300 rounded-lg p-2 px-5 mx-3 border shadow-md">Add Filter</button>
          </div>
        </div>
        <div className="px-10 max-width-screen-xl">
          <Dashboard />
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
}

export default Home;

import { useState } from "react"; // Importing useState hook from React
import styles from "./Dashboard.module.css"; // Importing CSS module for styling
import Speedometer from "../components/Speedometer"; // Importing Speedometer component
import Chart from "../components/Chart"; // Importing Chart component
import Navbar from "./navbar/navbar"; // Importing Navbar component

const Dashboard = () => {
  // useState hook to manage the state of which chart to show
  const [showChart, setShowChart] = useState("CO2");

  // Log the current state of showChart to the console for debugging
  console.log(showChart);

  return (
    <>
      <Navbar /> {/* Rendering the Navbar component */}
      <section className={styles["dashboard"]}>
        <div className={styles["meters"]}>
          <div>
            <Speedometer id="dial1" value={0} title="CO2" /> {/* Rendering Speedometer for CO2 */}
          </div>
          <div>
            <Speedometer id="dial2" value={0} title="Temp" /> {/* Rendering Speedometer for Temperature */}
          </div>
          <div>
            <Speedometer id="dial3" value={0} title="Ethylene" /> {/* Rendering Speedometer for Ethylene */}
          </div>
        </div>
        <select onChange={e => setShowChart(e.target.value)}> {/* Dropdown to select which chart to show */}
          <option value="CO2">CO2</option>
          <option value="Temprature">Temprature</option>
          <option value="Ethylene">Ethylene</option>
        </select>
        <div className={styles["graph"]}>
          {showChart === "CO2" && <Chart />} {/* Render Chart component if CO2 is selected */}
          {showChart === "Temprature" && <Chart />} {/* Render Chart component if Temperature is selected */}
          {showChart === "Ethylene" && <Chart />} {/* Render Chart component if Ethylene is selected */}
        </div>
      </section>
    </>
  );
};

export default Dashboard; // Exporting Dashboard component as default


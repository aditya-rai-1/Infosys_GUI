import {useState} from "react";
import styles from "./Dashboard.module.css";
import Speedometer from "../components/Speedometer";
import Chart from "../components/Chart";
import Navbar from "./navbar/navbar";
const Dashboard = () => {
  const [showChart, setShowChart] = useState("CO2");
  console.log(showChart);
  return (
    <>
      <Navbar />
      <section className={styles["dashboard"]}>
        <div className={styles["meters"]}>
          <div>
            <Speedometer id="dial1" value={0} title="CO2" />
          </div>
          <div>
            {" "}
            <Speedometer id="dial2" value={0} title="Temp" />
          </div>
          <div>
            {" "}
            <Speedometer id="dial3" value={0} title="Ethylene" />
          </div>
        </div>
        <select onChange={e => setShowChart(e.target.value)}>
          <option value="CO2">CO2</option>
          <option value="Temprature">Temprature</option>
          <option value="Ethylene">Ethylene</option>
        </select>
        <div className={styles["graph"]}>
          {showChart === "CO2" && <Chart />}
          {showChart === "Temprature" && <Chart />}
          {showChart === "Ethylene" && <Chart />}
        </div>
      </section>
    </>
  );
};

export default Dashboard;

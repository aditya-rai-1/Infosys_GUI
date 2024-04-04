import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./components/Login";
import Home from "./Home";
import RegistrationPage from "./components/SignUp";
import AddSC from "./components/AddSC";
import SupplierDocuments from "./components/AddMembers";
import AddDocs from "./components/AddDoc";
import UploadDocuments from "./components/UploadDocuments";
import Dashboard from "./components/Dashboard";
import Quality_parent from "./components/Quality_parent";
import {Supplychainwrapper} from "./components/supplychain/Supplychainwrapper";
import { Orderwrapper } from "./components/orders/Orderwrapper";
import { useStateValue } from "./context/StateProvider";
import Navbar from "./components/navbar/navbar";
import FormComponent from "./components/FormComponent";
export default function App() {
  const [token, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: "INITIALIZE_TOKEN",
    });
  }, [token.token]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/AddSC" element={<AddSC />} />
        <Route path="/SupplierDocuments" element={<SupplierDocuments />} />
        <Route path="/AddDocs" element={<AddDocs />} />
        <Route path="/UploadDocuments" element={<UploadDocuments />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quality" element={<Quality_parent />} />
        <Route path="/supplychain" element={<Supplychainwrapper />} />
        <Route path="/orders" element={<Orderwrapper />} />
        <Route path="additemdetails" element={
          <>
            <Navbar />
            <FormComponent />
          </>
        } />
      </Routes>
    </Router>
  );
}

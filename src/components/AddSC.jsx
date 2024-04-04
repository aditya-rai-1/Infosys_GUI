import React from "react";
import Navbar from "./navbar/navbar.jsx";
import { useNavigate } from "react-router-dom";
const SupplyChainManagement = () => {
  const navigate = useNavigate();
  const addMember = () => {
    const memberName = document.getElementById("memberNameInput").value;

    fetch("http://10.29.8.91/sc/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: memberName,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Optionally, update the UI to reflect the changes
      })
      .catch(error => {
        console.error("Error:", error);
        // Handle errors
      });
  };

  const deleteMember = () => {
    const memberName = document.getElementById("memberNameInput").value;

    fetch("http://10.29.8.91/sc/" + memberName, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Optionally, update the UI to reflect the changes
      })
      .catch(error => {
        console.error("Error:", error);
        // Handle errors
      });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        {/* Search Input Centered */}
        <div className="flex justify-center pt-4 pb-8">
          <div className="flex border rounded overflow-hidden w-1/3 input-group">
            <input className="px-4 py-2 w-full" type="search" placeholder="Search order, items..." />
            <button className="bg-gray-300 px-4 text-gray-700">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">CREATE NEW SUPPLY CHAIN</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter the name of new Supply Chain"
              className="w-full px-4 py-2 border rounded input-border"
            />
          </div>
          <h3 className="text-xl font-semibold mb-4">Supply Chain Members</h3>
          <div className="flex items-center gap-4 mb-6">
            <input
              id="memberNameInput"
              type="text"
              placeholder="Name of Member"
              className="border rounded px-4 py-2 input-border"
            />
            <button
              onClick={addMember}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
            <button
              onClick={deleteMember}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => (navigate('/additemdetails'))}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Item Details
            </button>
          </div>
          {/* Additional member input fields */}
        </div>
      </div>
    </>
  );
};

export default SupplyChainManagement;

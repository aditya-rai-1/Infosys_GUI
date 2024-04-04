import React from "react";
import Navbar from "./navbar/navbar.jsx";
import {useNavigate} from "react-router-dom";

const SupplierDocuments = () => {
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();

    // Define the payload for the POST request
    const payload = {
      code: "S1",
      supplychain: 1,
      product: "P1",
      quantity: 100,
      quantity_unit: "kg",
      acceptable_quality_lower_bound: 90,
      acceptable_quality_upper_bound: 95,
      expected_quality: 92,
    };

    // Define the options for the POST request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    // Make the POST request to the endpoint
    fetch("http://10.29.8.91/shipment", options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("POST request successful:", data);
        // Handle the response data as needed
      })
      .catch(error => console.error("Error making POST request:", error));
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 font-sans leading-normal tracking-normal">
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Main content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              {/* Title and search bar */}
              <div className="flex justify-between items-center">
                <h3 className="text-gray-700 text-3xl font-medium">Supply Chain</h3>
                <div className="flex">
                  <input
                    type="search"
                    placeholder="Search order, items..."
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-full focus:border-blue-500"
                  />
                </div>
              </div>
              <hr className="h-px my-3 border-0 dark:bg-gray-700" />
              <div className="font-bold">Supply chain 1</div>
              <hr className="h-px my-3 border-0 dark:bg-purple-700" />

              <div className="container rounded-lg bg-gray-100 p-6 flex space-x-4 overflow-x-auto">
                <div className="rounded-lg bg-blue-500 w-20 h-20 p-2 text-white text-center">A</div>
                <div className="rounded-lg bg-blue-500 w-20 h-20 p-2 text-white text-center">B</div>
                <div className="rounded-lg bg-blue-500 w-20 h-20 p-2 text-white text-center">C</div>
                <div className="rounded-lg bg-blue-500 w-20 h-20 p-2 text-white text-center">D</div>
                <div className="rounded-lg bg-blue-500 w-20 h-20 p-2 text-white text-center">E</div>
              </div>

              <div className="my-5 grid grid-cols-2 divide-x">
                <div className="mx-2">
                  <h3 className="text-center">SC Members</h3>
                  <div className="rounded-lg my-3 bg-slate-100 w-100 h-20 p-2 text-black text-center">
                    <div className="grid-cols-2">
                      <button
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mr-5"
                        onClick={() => navigate("/AddDocs")}
                      >
                        Add
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
                        onClick={() => navigate("/AddDocs")}
                      >
                        Delete
                      </button>
                    </div>
                    <div>A</div>
                  </div>
                  <div className="rounded-lg my-3 bg-slate-100 w-100 h-20 p-2 text-black text-center">
                    <div className="grid-cols-2">
                      <button
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mr-5"
                        onClick={() => navigate("/AddDocs")}
                      >
                        Add
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
                        onClick={() => navigate("/AddDocs")}
                      >
                        Delete
                      </button>
                    </div>
                    <div>B</div>
                  </div>
                  <div className="rounded-lg my-3 bg-slate-100 w-100 h-20 p-2 text-black text-center">
                    <div className="grid-cols-2">
                      <button
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mr-5"
                        onClick={() => navigate("/AddDocs")}
                      >
                        Add
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
                        onClick={() => navigate("/AddDocs")}
                      >
                        Delete
                      </button>
                    </div>
                    <div>C</div>
                  </div>
                </div>
                <div className="mx-2">
                  <h3 className="text-center">Shipments of the SC</h3>
                  <div className="rounded-lg my-3 bg-slate-100 w-100 h-20 p-2 text-black text-center font-bold">
                    Freight ID3
                  </div>
                  <div className="rounded-lg my-3 bg-slate-100 w-100 h-20 p-2 text-black text-center font-bold">
                    Frieght ID 6
                  </div>
                  <div className="rounded-lg my-3 bg-slate-100 w-100 h-20 p-2 text-black text-center font-bold">
                    Freight ID 8
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SupplierDocuments;

import React from "react";
import Navbar from "./navbar/navbar";
import {useNavigate} from "react-router-dom";
const AddDocs = () => {
  const navigate = useNavigate();
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
                <h3 className="text-gray-700 text-3xl font-medium">Supplier Documents</h3>
                <div className="flex">
                  <input
                    type="search"
                    placeholder="Search order, items..."
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-full focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex my-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                  onClick={() => navigate("/uploaddocuments")}
                >
                  UPLOAD
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-r border border-l-0 border-gray-400">
                  ENTER INFO
                </button>
              </div>

              {/* Form */}
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-5">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Enter your first name.."
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 my-5">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Enter your last name.."
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-5">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="email"
                    placeholder="info@xyz.com"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 my-5">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="+91 - 98596 58000"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-5">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Pin Code"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-5">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Location"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-5">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-5">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Enter Supplier ID"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddDocs;

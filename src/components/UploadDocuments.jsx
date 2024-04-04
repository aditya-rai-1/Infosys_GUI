import React, {useRef, useState} from "react";
import Navbar from "./navbar/navbar.jsx";
const UploadDocuments = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = event => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const uploadFiles = () => {
    const fileInput = fileInputRef.current;
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    fetch("http://10.29.8.91/upload", {
      method: "POST",
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("File uploaded successfully:", data);
        // Handle success response
      })
      .catch(error => {
        console.error("Error uploading file:", error);
        // Handle error
      });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 font-sans leading-normal tracking-normal">
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Main content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              {/* Header with Search */}
              <div className="flex justify-between items-center pb-6">
                <div>
                  <h2 className="text-gray-600 font-semibold">Supplier Documents</h2>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="rounded-full py-2 px-4 w-full text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Search order, items..."
                  />
                </div>
              </div>

              {/* Upload section */}
              <div className="bg-white p-8 rounded-md w-full">
                <div className="flex items-center justify-center w-full">
                  <label
                    id="fileUploadLabel"
                    className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center"
                  >
                    <div className="h-full w-full text-center flex flex-col items-center justify-center">
                      <svg
                        className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8v.01M9 16h.01M4 20h.01M5 5h38a2 2 0 012 2v34a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 28l7 7 13-13 7 7v4H11v-4z"
                        />
                      </svg>
                      <p className="lowercase text-sm text-gray-400 group-hover:text-gray-600 pt-1 tracking-wider">
                        Drag & drop files or{" "}
                        <span className="text-blue-600 hover:underline" onClick={handleUploadClick}>
                          browse
                        </span>
                      </p>
                    </div>
                    <input
                      id="fileInput"
                      type="file"
                      className="hidden"
                      multiple
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
              </div>

              {/* File upload status */}
              <div className="flex flex-col mt-8">
                <div>
                  <h3 className="text-md mb-1 text-gray-700">Uploading - 3/3 files</h3>
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                      style={{width: "100%"}}
                    >
                      {fileName}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 last:mr-0 mr-1">
                      Document uploaded
                    </span>
                    <button type="button" className="text-red-600 hover:text-red-700">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
                    onClick={uploadFiles}
                  >
                    UPLOAD FILES
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UploadDocuments;

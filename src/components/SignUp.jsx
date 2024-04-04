import React, {useState} from "react";

const RegistrationPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    supplierId: "",
  });

  // Handle input change
  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async e => {
    e.preventDefault();
    const {password, confirmPassword} = formData;

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    // API call to register the user
    try {
      const response = await fetch("http://10.29.8.91/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          first_name: formData.firstName,
          last_name: formData.lastName,
          username: formData.email,
          address: "Hello",
          organisation: "123", // Assuming email is used as username
        }),
      });
      console.log(response);
      alert("Registration successful");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering");
    }
  };

  return (
    <div className="bg-blue-800 flex items-center justify-center h-screen relative overflow-hidden">
      <div className="background-circle-2"></div>
      <div className="background-circle-1"></div>
      <div className="form-card bg-blue-900 text-white p-8 rounded-lg max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <img src="sclogo.png" alt="Logo" style={{width: "100px", height: "120px"}} />
        </div>
        <form id="registrationForm" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input-field w-full p-3 rounded bg-transparent border border-white placeholder-white"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input-field w-full p-3 rounded bg-transparent border border-white placeholder-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              placeholder="Email Id"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field w-full p-3 rounded bg-transparent border border-white placeholder-white"
            />
            <input
              type="tel"
              placeholder="Mobile No."
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field w-full p-3 rounded bg-transparent border border-white placeholder-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field w-full p-3 rounded bg-transparent border border-white placeholder-white"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field w-full p-3 rounded bg-transparent border border-white placeholder-white"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Supplier ID"
              name="supplierId"
              value={formData.supplierId}
              onChange={handleChange}
              className="input-field w-full p-3 rounded bg-transparent border border-white placeholder-white"
            />
          </div>
          <button
            type="submit"
            className="submit-btn w-full p-3 rounded bg-blue-700 text-white font-semibold hover:bg-blue-800"
          >
            Sign up
          </button>
        </form>
      </div>
      {/* Inline styles for custom elements */}
      <style jsx>{`
        .background-circle-1 {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background-color: #3457d5;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: -1;
          opacity: 0.6;
        }
        .background-circle-2 {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background-color: #3457d5;
          position: absolute;
          bottom: -150px;
          left: -150px;
          z-index: -1;
          opacity: 0.6;
        }
        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .input-field:focus {
          box-shadow: none;
          border-color: rgba(255, 255, 255, 0.8);
        }
        .submit-btn:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
};

export default RegistrationPage;

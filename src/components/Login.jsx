import React, {useState} from "react";
import { useStateValue } from "../context/StateProvider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, dispatch] = useStateValue();

  const login = async () => {
    try {
      const response = await fetch("http://10.29.8.91/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password}),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      // console.log("Login successful:", data);
      dispatch({
        type: "SET_TOKEN",
        token: data.jwt_token,
      
      });
      window.location.href = "/";
      // Redirect user to a new page or handle login success scenario here
    } catch (error) {
      console.error("Login error:", error.message);
      // Handle login failure scenario here
    }
    
  };

  return (
    <div className="bg-blue-800 flex items-center justify-center h-screen">
      <div className="bg-blue-900 text-white p-8 rounded-lg max-w-sm w-full relative">
        <div className="flex justify-center mb-6">
          <img src="/sclogo.png" alt="Logo" className="w-24 h-30" />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full p-3 rounded bg-transparent border border-white placeholder-white focus:border-white focus:ring-0"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-transparent border border-white placeholder-white focus:border-white focus:ring-0"
            placeholder="Password"
          />
        </div>
        <button
          onClick={login}
          className="w-full p-3 rounded bg-white text-blue-800 font-semibold hover:bg-opacity-90 transition-colors"
        >
          LOGIN
        </button>
        <div className="flex flex-col items-center mt-6 text-sm">
          <a href="#" className="text-white hover:text-blue-200">
            Forgot supplier id/password?
          </a>
          <a href="/register" className="text-white hover:text-blue-200">
            New Registration
          </a>
        </div>
        {/* Custom background shapes could potentially be managed via a Tailwind plugin or custom CSS */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-700 rounded-full opacity-60 z-[-1]"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-700 rounded-full opacity-60 z-[-1]"></div>
      </div>
    </div>
  );
};

export default LoginPage;

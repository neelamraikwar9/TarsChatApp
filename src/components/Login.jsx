// import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useUser } from "../context/userProvider";
// import { useNavigate } from "react-router-dom";

const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); 

  const { handleLogin, email, setEmail, password, setPassword } = useUser();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await axios.post("http://localhost:5000/auth/login", {
//         email,
//         password,
//       });
      
//       useEffect(() => {
//         setUser(data);
//         navigate("/chat");
//       }, []); 
      
      

//       //   setEmail("");
//       //   setPassword("");
//     } catch (error) {
//       console.error(error.response?.data?.message || "Error logging in");
//     }
//   };

  return (
    <form onSubmit={handleLogin}>
      <h2>Tars Chat App</h2>
      <p>Login with your credentials to continue.</p>

      <div>
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="form-control form-control-lg mt-3"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <br />

      <div>
        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="form-control form-control-lg mt-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <br />

      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;

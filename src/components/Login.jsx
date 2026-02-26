import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../context/userProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const { data } = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      setUser(data);
    //   setEmail("");
    //   setPassword("");
    } catch (error) {
      console.error(error.response?.data?.message || "Error logging in");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <p>Login with your credentials to continue.</p>

      <div>
        <label>Email: </label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          className="form-control form-control-lg mt-3"
          onChange={(e) => setEmail(e.target.value)}
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
        />
      </div>

      <button className="btn btn-success btn-lg mt-3" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;

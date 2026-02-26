// import React, { useState } from "react";
// import axios from "axios";
import { useUser } from "../context/userProvider";

const SignUp = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [registerationSuccess, setRegistrationSuccess] = useState(null);

  const {
    handleRegister,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    registerationSuccess,
    setRegistrationSuccess,
  } = useUser();

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   setRegistrationSuccess(null); // Clear previous

  //   try {
  //     const { data } = await axios.post("http://localhost:5000/auth/signUp", {
  //       username,
  //       email,
  //       password,
  //     });

  //     setRegistrationSuccess(
  //       "You are registered successfully. Proceed to login.",
  //     );
  //     setUser(data);
  //     setUsername(""); 
  //     setEmail(""); 
  //     setPassword(""); 
  //   } catch (error) {
  //     console.error(error.response?.data?.message || "Error registering user");
  //     setRegistrationSuccess(
  //       error.response?.data?.message || "Error registering user",
  //     );
  //   } finally {
  //     setTimeout(() => setRegistrationSuccess(null), 2000);
  //   }
  // };

  return (
    <div>
      <div className="card-body px-5">
        <h2>Tars Chat App</h2>

        <p>Not a user yet? Register to Chat!</p>
        <form onSubmit={handleRegister}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              placeholder="Your Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <br />

          <div>
            <label>Email: </label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />

          <div>
            <label>Password: </label>
            <input
              type="password"
              placeholder=" Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />

          <button type="submit">Register</button>
        </form>
        {registerationSuccess && <p>{registerationSuccess}</p>}
      </div>
    </div>
  );
};

export default SignUp;

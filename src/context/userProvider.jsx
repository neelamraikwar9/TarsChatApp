import { createContext, useContext, useState } from "react";
import axios from 'axios'; 
// import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);


   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [registerationSuccess, setRegistrationSuccess] = useState(null);



  //  const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 






  const handleRegister = async (e) => {
      e.preventDefault();
      setRegistrationSuccess(null); // Clear previous
  
      try {
        const { data } = await axios.post("http://localhost:5000/auth/signUp", {
          username,
          email,
          password,
        });
  
        setRegistrationSuccess(
          "You are registered successfully. Proceed to login.",
        );
        setUser(data);
        setUsername(""); 
        setEmail(""); 
        setPassword(""); 
      } catch (error) {
        console.error(error.response?.data?.message || "Error registering user");
        setRegistrationSuccess(
          error.response?.data?.message || "Error registering user",
        );
      } finally {
        setTimeout(() => setRegistrationSuccess(null), 2000);
      }
    };





  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      // useEffect(() => {
      setUser(data);
      navigate("/chat");
      // }, []);

      //   setEmail("");
      //   setPassword("");
    } catch (error) {
      console.error(error.response?.data?.message || "Error logging in");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        handleRegister,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        registerationSuccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

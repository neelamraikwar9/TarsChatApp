
import './App.css'
import { Routes, Route } from "react-router-dom"; 
import SignUp from './components/signUp';
import Login from './components/Login';


function App() {
 
  

  return (
    <Routes>
      <Route path="/" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  );
}

export default App

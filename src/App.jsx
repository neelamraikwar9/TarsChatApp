
import './App.css'
import { Routes, Route } from "react-router-dom"; 
import SignUp from './components/signUp';
import Login from './components/Login';
import Chat from './components/Chat'


function App() {
 
  

  return (
    <Routes>
      <Route path="/" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/chat" element={<Chat/>}></Route>
      
    </Routes>
  );
}

export default App

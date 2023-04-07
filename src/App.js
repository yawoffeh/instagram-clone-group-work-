import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;

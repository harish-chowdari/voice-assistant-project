import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import PasswordReset from "./Components/PasswordReset/PasswordReset";


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path="/reset" element= {<PasswordReset/>} />
      </Routes>
    </BrowserRouter>
      
      
    </div>
  );
};

export default App;

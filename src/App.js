import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Render from "./Render";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import '../src/styles/nav.css';
import "../src/styles/home.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="login" />} />
                <Route path="login" element={<Login />} />
                <Route path="home" element={<Render component={<Home />} />} />
                <Route path="register" element={<Register/>}/>
            </Routes>
        </Router>
    );
}

export default App;

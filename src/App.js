import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Render from "./Render";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Enlaces from "./pages/Enlaces"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="login" />} />
                <Route path="login" element={<Login />} />
                <Route path="home" element={<Render component={<Home />} />} />
                <Route path="register" element={<Register/>}/>
                <Route path="enlaces" element={<Render component={<Enlaces/>} />} />

            </Routes>
        </Router>
    );
}

export default App;

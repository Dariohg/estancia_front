import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Render from "./Render";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Enlaces from "./pages/Enlaces"
import AddEnlace from "./pages/AddEnlace";
import AddContrato from "./pages/AddContrato";
import i18n from './i18n';
import Contrato from "./pages/Contrato";
import TablaPrueba from "./pages/TablaPrueba";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="login" />} />
                <Route path="login" element={<Login />} />
                <Route path="home" element={<Render><Home /></Render>} />
                <Route path="register" element={<Register/>}/>
                <Route path="enlaces" element={<Render><Enlaces/></Render>} />
                <Route path="addEnlace" element={<Render><AddEnlace/></Render>}/>
                <Route path="addContrato" element={<Render><AddContrato/></Render>}/>
                <Route path="contrato" element={<Render><Contrato/></Render>}/>
                <Route path="tablaPrueba" element={<Render><TablaPrueba/></Render>}/>
            </Routes>
        </Router>
    );
}

export default App;

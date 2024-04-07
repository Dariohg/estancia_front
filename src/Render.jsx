import React from "react";
import { Nav } from "./pages/components/Nav"; // Importar como una importación con nombre
import "./styles/global.css";

function Render({ children }) {
    return (
        <>
            <Nav />
            <div className="content">{children}</div>
        </>
    );
}


export default Render;

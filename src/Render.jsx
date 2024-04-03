import React from "react";
import { Nav } from "./pages/components/Nav";
import "./styles/global.css"

function Render({ component }) {
    return (
        <>
            <Nav />
            <div className="content">{component}</div>
        </>
    );
}

export default Render;

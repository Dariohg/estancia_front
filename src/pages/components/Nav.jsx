import React, { useState } from "react";
import Escudo from'../../assets/Imgs/Escudo del estado.png';
import "../../styles/nav.css";


export const Nav = () => {
    const [hidden, setHidden] = useState(false);

    const toggleNav = () => {
        setHidden(!hidden);
    };

    return (
        <div className={`contain_nav ${hidden ? 'nav-hidden' : ''}`}>
          <div className="nav-header" onClick={toggleNav}>
            <img src={Escudo} alt="Escudo" className={`logo ${hidden ? 'logo-hidden' : ''}`} />
            <p className="department-text"> Departamento de Infraestructura </p>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn">Ver Enlaces</button>
            <button className="nav-btn">Crear Enlaces</button>
          </div>
        </div>
    );
};

export default Nav;
import React from "react";
import "../styles/nav.css";
import "../styles/home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="header">
                <h1 className="title">Digitalización de Enlaces Tecnológicos</h1>
            </div>
            <div className="content">
                <p>¡Bienvenido a nuestro sitio web de digitalización de enlaces tecnológicos!</p>
            </div>
            <div className="features">
                <h2>Características destacadas</h2>
                <ul>
                    <li>Acceso rápido a recursos tecnológicos</li>
                    <li>Tutoriales paso a paso</li>
                    <li>Actualizaciones periódicas sobre tecnología</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;

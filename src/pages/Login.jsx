import React from "react";
import "../styles/login.css";

const Login = () => {
    return (
        <div className="container">
            <form className="form">
                <h2 className="form-title">Iniciar Sesión</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usuario:</label>
                    <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className="contain_btn">
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    );
};

export default Login;

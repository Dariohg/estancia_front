import { useCookies } from "react-cookie";
import React, { useState } from "react";
import "../styles/login.css";
import axios from "axios";

const URI = "http://localhost:8000";

const Login = () => {
    const [cookies, setCookie] = useCookies(["session_token"]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URI + '/auth/login', { username, password });
            setCookie("session_token", response.data.token);
            window.location.href = "/enlaces";
        } catch (error) {
            console.error("Error al iniciar sesión", error);
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit} >
                <h2 className="form-title">Iniciar Sesión</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usuario:</label>
                    <input type="text" className="form-control" id="username" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="contain_btn">
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
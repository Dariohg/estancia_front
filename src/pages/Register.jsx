import React from "react";
import "../styles/register.css";

const Register = () => {
    return (
        <div className="register-containerr">
            <h2>Registro de Nuevo Usuario</h2>
            <form className="register-form">
                <div className="register-row">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" className="register-input" placeholder="Nombre" />
                </div>
                <div className="register-row">
                    <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                    <input type="text" id="apellidoPaterno" className="register-input" placeholder="Apellido Paterno" />
                </div>
                <div className="register-row">
                    <label htmlFor="apellidoMaterno">Apellido Materno</label>
                    <input type="text" id="apellidoMaterno" className="register-input" placeholder="Apellido Materno" />
                </div>
                <div className="register-row">
                    <label htmlFor="correo">Correo Electrónico</label>
                    <input type="email" id="correo" className="register-input" placeholder="Correo Electrónico" />
                </div>
                <div className="register-row">
                    <label htmlFor="telefono">Número de Teléfono</label>
                    <input type="tel" id="telefono" className="register-input" placeholder="Número de Teléfono" />
                </div>
                <div className="register-row">
                    <label htmlFor="cargo">Cargo Administrativo</label>
                    <input type="text" id="cargo" className="register-input" placeholder="Cargo Administrativo" />
                </div>
                <div className="register-row">
                    <label htmlFor="departamento">Departamento (Área)</label>
                    <input type="text" id="departamento" className="register-input" placeholder="Departamento (Área)" />
                </div>
                <button className="register-button">Registrar Usuario</button>
            </form>
        </div>
    );
};

export default Register;

import React, { useState } from "react";
import "../styles/addEnlace.css";

const AddEnlace = () => {
    const [dependencia, setDependencia] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [direccion, setDireccion] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [telefono, setTelefono] = useState("");
    const [cargo, setCargo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a tu backend
    };

    return (
        <div className="contain_main">
            <div className="container_titulo">
            <h1 className="titulo">Agregar Enlace</h1>
            </div>
            <hr className="separacion" />
            <div className="formulario-container">
                <div className="contain_dependencia">
                    <label htmlFor="dependencia">Catálogo de dependencias:</label>
                    <select
                        id="dependencia"
                        value={dependencia}
                        onChange={(e) => setDependencia(e.target.value)}
                    >
                        {/* Opciones de dependencias */}
                    </select>
                </div>

                <div className="contain_direccion">
                    <label htmlFor="direccion">Catálogo de direcciones:</label>
                    <select
                        id="direccion"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                    >
                        {/* Opciones de direcciones */}
                    </select>
                </div>
                <div className="contain_departamento">
                    <label htmlFor="departamento">Catálogo de departamentos:</label>
                    <select
                        id="departamento"
                        value={departamento}
                        onChange={(e) => setDepartamento(e.target.value)}
                    >
                        {/* Opciones de departamentos */}
                    </select>
                </div>
                <div className="contain_nombre">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="contain_ApellidoP">
                    <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
                    <input
                        type="text"
                        id="apellidoPaterno"
                        value={apellidoPaterno}
                        onChange={(e) => setApellidoPaterno(e.target.value)}
                    />
                </div>
                <div className="contain_apellidoM">
                    <label htmlFor="apellidoMaterno">Apellido Materno:</label>
                    <input
                        type="text"
                        id="apellidoMaterno"
                        value={apellidoMaterno}
                        onChange={(e) => setApellidoMaterno(e.target.value)}
                    />
                </div>
                <div className="contain_correo">
                    <label htmlFor="correoElectronico">Correo electrónico:</label>
                    <input
                        type="email"
                        id="correoElectronico"
                        value={correoElectronico}
                        onChange={(e) => setCorreoElectronico(e.target.value)}
                    />
                </div>
                <div className="contain_telefono">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>
                <div className="contain_cargo">
                    <label htmlFor="cargo">Cargo:</label>
                    <select
                        id="cargo"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                    >
                        {/* Opciones de cargos */}
                    </select>
                </div>
                <div className="button-container">
                    <button type="submit" className="green-button">Guardar</button>
                    <button type="button" className="yellow-button">Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default AddEnlace;

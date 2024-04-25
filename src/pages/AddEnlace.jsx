import React, { useEffect, useState } from "react";
import "../styles/addEnlace.css";
import axios from "axios";
import Dropdown from "./components/Dropdown";

const URI = "http://localhost:8000/cargo/";

const AddEnlace = () => {
    const [dependencia, setDependencia] = useState([]);
    const [direccion, setDireccion] = useState([]);
    const [departamento, setDepartamento] = useState([]);

    const [selectedDependencia, setSelectedDependencia] = useState(null);
    const [selectedDireccion, setSelectedDireccion] = useState(null);
    const [selectedDepartamento, setSelectedDepartamento] = useState(null);

    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [telefono, setTelefono] = useState("");
    const [cargo, setCargo] = useState([]);
    const [selectedCargo, setSelectedCargo] = useState(null);


    useEffect(() => {
        getDependencias();
    }, []);

    const getDependencias = async () => {
        try {
            const [dependenciasRes, cargosRes] = await Promise.all([
                axios.get("http://localhost:8000/dependencia/"),
                axios.get("http://localhost:8000/cargo/"),
            ]);
            setDependencia(dependenciasRes.data);
            setCargo(cargosRes.data);
        } catch (error) {
            console.error("Error al obtener dependencias y cargos:", error);
        }
    };


    const handleDependenciaChange = async (selectedValue) => {
        setSelectedDependencia(selectedValue);
        console.log(selectedValue);
        setSelectedDireccion(null);
        setSelectedDepartamento(null);

        try {
            const response = await axios.get(`http://localhost:8000/direccion/direccionById?dependencia_id=${selectedValue}`);
            setDireccion(response.data);
        } catch (error) {
            console.error("Error al obtener las direcciones:", error);
        }
    };

    const handleDireccionChange = async (selectedValue) => {
        setSelectedDireccion(selectedValue);
        setSelectedDepartamento(null);

        try {
            const response = await axios.get(`http://localhost:8000/departamento/departamentoById?direccion_id=${selectedValue}`);
            setDepartamento(response.data);
        } catch (error) {
            console.error("Error al obtener los departamentos:", error);
        }
    };

    const handleDepartamentoChange = (selectedValue) => {
        setSelectedDepartamento(selectedValue);
    };

    const handleCargoChange = (selectedValue) => {
        console.log(selectedValue);
        setSelectedCargo(selectedValue);
    };


    const filteredDirecciones = direccion.filter((d) => d.dependencia_id === selectedDependencia);
    const filteredDepartamentos = departamento.filter((dep) => dep.direccion_id === selectedDireccion);

    return (
        <div className="contain_main">
            <div className="container_titulo">
                <h1 className="titulo">Agregar Enlace</h1>
            </div>
            <hr className="separacion" />
            <div className="formulario-container">
                <div className="contain_dependencia">
                    <label htmlFor="dependencia">Catálogo de Dependencia:</label>
                    <Dropdown
                        id="dependencia"
                        value={selectedDependencia}
                        onChange={handleDependenciaChange}
                        options={dependencia.map((dep) => ({
                            value: dep.idDependencia,
                            label: dep.nombreDependencia }))}
                    />
                </div>

                <div className="contain_direccion">
                    <label htmlFor="direccion">Catálogo de Dirección:</label>
                    <Dropdown
                        id="direccion"
                        value={selectedDireccion}
                        onChange={handleDireccionChange}
                        options={filteredDirecciones.map((dir) => ({ value: dir.idDireccion, label: dir.nombreDireccion }))}
                        disabled={!selectedDependencia}
                    />
                </div>

                <div className="contain_departamento">
                    <label htmlFor="departamento">Catálogo de Departamento:</label>
                    <Dropdown
                        id="departamento"
                        value={selectedDepartamento}
                        onChange={handleDepartamentoChange}
                        options={filteredDepartamentos.map((dep) => ({ value: dep.idDepartamento, label: dep.nombreDepartamento }))}
                        disabled={!selectedDireccion}
                    />
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
                    <Dropdown
                        id="cargo"
                        value={selectedCargo}
                        onChange={handleCargoChange}
                        options={cargo.map((cargo) => ({
                            value: cargo.idCargo,
                            label: cargo.nombreCargo
                        }))}
                    />
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

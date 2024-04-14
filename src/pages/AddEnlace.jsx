import React, { useEffect, useState } from 'react';
import "../styles/addEnlace.css";
import axios from "axios";
import Dropdown from "./components/Dropdown";

const URI = 'http://localhost:8000/cargo/';

const AddEnlace = () => {
    const [cargo, setCargo] = useState([]);
    const [dependencia, setDependencia] = useState([]);
    const [direccion, setDireccion] = useState([]);
    const [departamento, setDepartamento] = useState([]);
    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [telefono, setTelefono] = useState("");

    const [selectedCargo, setSelectedCargo] = useState("");
    const [selectedDependencia, setSelectedDependencia] = useState("");
    const [selectedDireccion, setSelectedDireccion] = useState("");
    const [selectedDepartamento, setSelectedDepartamento] = useState("");

    const [filteredDirecciones, setFilteredDirecciones] = useState([]);
    const [filteredDepartamentos, setFilteredDepartamentos] = useState([]);


    useEffect(() => {
        getCargos();
        getDependenciasDireccionesDepartamentos();
    }, []);

    const getCargos = async () => {
        try {
            const res = await axios.get('http://localhost:8000/cargo/');
            setCargo(res.data);
        } catch (error) {
            console.error('Error fetching cargos:', error);
        }
    };

    const getDependenciasDireccionesDepartamentos = async () => {
        try {
            const [dependenciasRes, direccionesRes, departamentosRes] = await Promise.all([
                axios.get('http://localhost:8000/dependencia/'),
                axios.get('http://localhost:8000/direccion/'),
                axios.get('http://localhost:8000/departamento/')
            ]);
            setDependencia(dependenciasRes.data);
            setDireccion(direccionesRes.data);
            setDepartamento(departamentosRes.data);
        } catch (error) {
            console.error('Error fetching dependencias, direcciones, departamentos:', error);
        }
    };

    const handleDependenciaChange = (selectedOption) => {
        if (selectedOption && selectedOption.value) {
            const dependenciaId = selectedOption.value;
            console.log("Dependencia seleccionada:", selectedOption); // Agregar este console.log
            setSelectedDependencia(dependenciaId);
            const filteredDirecciones = direccion.filter(d => d.dependencia_id === dependenciaId);
            setFilteredDirecciones(filteredDirecciones);
            setSelectedDireccion(""); // Limpiar la selección de dirección
            setFilteredDepartamentos([]); // Limpiar los departamentos filtrados
            setSelectedDepartamento(""); // Limpiar la selección de departamento
        }
    };


    const handleDireccionChange = (selectedOption) => {
        if (selectedOption && selectedOption.value) {
            const direccionId = selectedOption.value;
            setSelectedDireccion(direccionId);
            const filteredDepartamentos = departamento.filter(dep => dep.direccion_id === direccionId);
            setFilteredDepartamentos(filteredDepartamentos);
            setSelectedDepartamento(""); // Limpiar la selección de departamento
        }
    };

    const handleCargoChange = (selectedOption) => {
        setSelectedCargo(selectedOption.value);
    };

    const hanldeDepartamentoChange = (selectedOption) => {
        setSelectedDepartamento(selectedOption.value);
    };

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
                    <label htmlFor="dependencia">Catálogo de Dependencia:</label>
                    <Dropdown
                        id="dependencia"
                        value={selectedDependencia}
                        onChange={(selectedOption) => handleDependenciaChange(selectedOption)}
                        options={dependencia.map((dependencia) => ({
                            value: dependencia.idDependencia,
                            label: dependencia.nombreDependencia
                        }))}
                    />
                </div>

                <div className="contain_direccion">
                    <label htmlFor="direccion">Catálogo de Dirección:</label>
                    <Dropdown
                        id="direccion"
                        value={selectedDireccion}
                        onChange={handleDireccionChange}
                        options={filteredDirecciones.map((direccion) => ({
                            value: direccion.idDireccion,
                            label: direccion.nombreDireccion
                        }))}
                    />
                </div>

                <div className="contain_departamento">
                    <label htmlFor="departamento">Catálogo de Departamento:</label>
                    <Dropdown
                        id="departamento"
                        value={selectedDepartamento}
                        onChange={hanldeDepartamentoChange}
                        options={filteredDepartamentos.map((departamento) => ({
                            value: departamento.idDepartamento,
                            label: departamento.nombreDepartamento
                        }))}
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

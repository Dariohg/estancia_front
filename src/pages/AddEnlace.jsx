import React, { useEffect, useState } from "react";
import "../styles/addEnlace.css";
import axios from "axios";
import Dropdown from "./components/Dropdown";
import { useNavigate } from "react-router-dom";


const URI = "http://localhost:8000/cargo/";

const AddEnlace = () => {
    const navigate = useNavigate();
    const [dependencia, setDependencia] = useState([]);
    const [direccion, setDireccion] = useState([]);
    const [departamento, setDepartamento] = useState([]);

    const [selectedDependencia, setSelectedDependencia] = useState(null);
    const [selectedDireccion, setSelectedDireccion] = useState(null);
    const [selectedDepartamento, setSelectedDepartamento] = useState(null);
    const [cargo, setCargo] = useState([]);
    const [selectedCargo, setSelectedCargo] = useState(null);

    const handleClick = () => {
        navigate("/enlaces");
    };
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
        setSelectedDireccion(null);
        setSelectedDepartamento(null);

        try {
            const response = await axios.get(`http://localhost:8000/direccion/direccionById?dependencia_id=${selectedValue}`);
            setDireccion(response.data);
            setFormData((prevData) => ({
                ...prevData,
                dependencia: selectedValue,
                idDependencia: selectedValue // Asegura que idDependencia se actualice en formData
            }));
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
            setFormData((prevData) => ({
                ...prevData,
                direccion: selectedValue,
                idDireccion: selectedValue // Asegura que idDireccion se actualice en formData
            }));
        } catch (error) {
            console.error("Error al obtener los departamentos:", error);
        }
    };


    const handleDepartamentoChange = (selectedValue) => {
        setSelectedDepartamento(selectedValue); // Actualiza el estado con la opción seleccionada
        setFormData((prevData) => ({
            ...prevData,
            departamento: selectedValue,
            idDepartamento: selectedValue // Asegura que idDepartamento se actualice en formData
        }));
    };

    const handleCargoChange = (selectedValue) => {
        setSelectedCargo(selectedValue); // Actualiza el estado con la opción seleccionada
        setFormData((prevData) => ({
            ...prevData,
            cargo: selectedValue,
            idCargo: selectedValue
        }));
    };



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const filteredDirecciones = direccion.filter((d) => d.dependencia_id === selectedDependencia);
    const filteredDepartamentos = departamento.filter((dep) => dep.direccion_id === selectedDireccion);

    const [formData, setFormData] = useState({
        nombre: "",
        apellidoP: "",
        apellidoM: "",
        correo: "",
        telefono: "",
        cargo: null,
        dependencia: null,
        direccion: null,
        departamento: null,
        estatus_id: 1,
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validar que los campos obligatorios no estén vacíos
        if (!formData.nombre || !formData.apellidoP || !formData.apellidoM || !formData.correo || !formData.telefono || !formData.cargo || !formData.dependencia || !formData.direccion || !formData.departamento) {
            alert("Por favor completa todos los campos.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/enlace", formData);
            console.log("Enlace agregado:", response.data);
            alert("Enlace agregado correctamente.");
            setFormData({
                nombre: "",
                apellidoP: "",
                apellidoM: "",
                correo: "",
                telefono: "",
                cargo: null,
                dependencia: null,
                direccion: null,
                departamento: null,
            });
            setSelectedDependencia(null);
            setSelectedDireccion(null);
            setSelectedDepartamento(null);
            setSelectedCargo(null);
            } catch (error) {
            console.error("Error al agregar el enlace:", error);
        }
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
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="contain_ApellidoP">
                    <label htmlFor="apellidoP">Apellido Paterno:</label>
                    <input
                        type="text"
                        id="apellidoP"
                        name="apellidoP"
                        value={formData.apellidoP}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="contain_apellidoM">
                    <label htmlFor="apellidoM">Apellido Materno:</label>
                    <input
                        type="text"
                        id="apellidoM"
                        name="apellidoM"
                        value={formData.apellidoM}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="contain_correo">
                    <label htmlFor="correo">Correo electrónico:</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="contain_telefono">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
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
                    <button type="submit" className="green-button" onClick={handleSubmit}>Guardar</button>
                    <button type="button" className="yellow-button" onClick={handleClick}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default AddEnlace;

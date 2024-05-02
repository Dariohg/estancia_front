import React, {useEffect, useState} from "react";
import "../styles/addContrato.css";
import Dropdown from "./components/Dropdown";
import axios from "axios";
const URI = "http://localhost:8000";


const AddContrato = () => {
    const [versionContrato, setVersionContrato] = useState([]);
    const [tipoContrato, setTipoContrato]=useState([]);
    const [usuarioEnlace, setUsuarioEnlace]= useState([]);

    const [selectVersionContrato, setSelectVersionContrato]=useState(null);
    const [selectTipoContrato, setSelectTipoContrato]=useState(null);
    const [selectedusuarioEnlace, setSelectedUsuarioEnlace]= useState(null);


    useEffect(() => {
        getVersionContrato();
        getTipoContrato();
        getUsuarioEnlace();
    }, []);

    const getVersionContrato = async () => {
        try {
            const response = await axios.get(URI+'/versionContrato');
            setVersionContrato(response.data);
        } catch (error) {
            console.error("Error al obtener version de Contratos", error);
        }
    };
    const getTipoContrato = async ()=>{
        try {
            const response = await axios.get(URI+'/tipoContrato');
            setTipoContrato(response.data);
        }catch (error){
            console.log("Error al obterner los tipos de contrat", error);
        }
    }
    const getUsuarioEnlace = async () =>{
        try {
            const response = await axios.get(URI+'/enlace/status?estatus_id=1');
            setUsuarioEnlace(response.data);
        }catch (error){
            console.log("Error al obtener los usuarios de enlace", error);
        }
    }

    const handleVersionContratoChange = (selectedValue) => {
        setSelectVersionContrato(selectedValue); // Actualiza el estado con la opción seleccionada
    };

    const handleTipoContrato = (selectValue)=>{
        setSelectTipoContrato(selectValue);
    }

    const handleUsuarioEnlace = (selectValue)=>{
        setSelectTipoContrato(selectValue);
    }


    return (
        <div>
        <div className="container_titulo">
            <h1 className="titulo">Agregar Contrato</h1>
        </div>
        <hr className="separacion" />
            <div className="formulario-container">

                <div className="contain_cliente">
                    <label htmlFor="cliente">Cliente:</label>
                    <Dropdown
                        id="usuarioEnlace"
                        onChange={handleUsuarioEnlace}
                        options={usuarioEnlace.map((usuario) => ({
                            value: usuario.idEnlace,
                            label: `${usuario.nombre} ${usuario.apellidoP} ${usuario.apellidoM}`,
                        }))}
                    />
                </div>
                <div className="contain_contrato">
                    <label htmlFor="tipoContrato">Tipo de Contrato:</label>
                    <Dropdown
                        id="tipoContrato"
                        onChange={handleTipoContrato}
                        options={tipoContrato.map((tipoContrato) => ({
                            value: tipoContrato.id_tipoContrato,
                            label: tipoContrato.nombre,
                        }))}
                    />
                </div>
                <div className="contain_fechaContrato">
                    <label htmlFor="fechaContrato">Fecha de Contrato:</label>
                    <input type="date" id="fechaContrato" />
                </div>


                <div className="contain_version">
                    <label htmlFor="versionContrato">Versión de Contrato:</label>
                    <Dropdown
                        id="versionContrato"
                        onChange={handleVersionContratoChange}
                        options={versionContrato.map((version) => ({
                            value: version.id_contrato,
                            label: version.descripcion,
                        }))}
                    />
                </div>
                <div className="contain_instalacion">
                    <label>Tipo de Instalación:</label>
                    <div>
                        <input type="radio" id="opcion1" name="tipoInstalacion" value="opcion1" />
                        <label htmlFor="opcion1">Opción 1</label>
                    </div>
                    <div>
                        <input type="radio" id="opcion2" name="tipoInstalacion" value="opcion2" />
                        <label htmlFor="opcion2">Opción 2</label>
                    </div>
                </div>
                <div className="descripcion">
                <label htmlFor="descripcion">Descripción:</label>
                <textarea className="textAreaDescripcion" id="descripcion"></textarea>
                </div>
                <div className="button-container">
                    <button type="submit" className="green-button">Guardar</button>
                    <button type="button" className="yellow-button">Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default AddContrato;

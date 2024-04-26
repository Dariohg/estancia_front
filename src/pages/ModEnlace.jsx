import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/modEnlace.css';

const ModEnlace = () => {
    const [enlaceData, setEnlaceData] = useState(null);
    const [editable, setEditable] = useState(false);
    const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar la ventana modal
    const [edit, setEdit]= useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchEnlace();
    }, []);

    const fetchEnlace = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/enlace/${id}`);
            setEnlaceData(response.data);
            console.log(response);
        } catch (error) {
            console.error('Error fetching enlace data:', error);
        }
    };

    const handleUpdate = () => {
        setEditable(true);
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:8000/enlace/${id}`, enlaceData);
            setEditable(false);
        } catch (error) {
            console.error('Error updating enlace data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEnlaceData({ ...enlaceData, [name]: value });
    };
    const handleCancel = () => {
        setEditable(false);
        fetchEnlace(); // Recargar los datos originales al cancelar
    };

    const handleDelete = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    if (!enlaceData) {
        return <div>Loading...</div>;
    }

    const confirmDelete = async () => {
        try {
            await axios.put(`http://localhost:8000/enlace/eliminar/${id}`);
            navigate('/enlaces');
        } catch (error) {
            console.error('Error updating enlace:', error);
        }
    };


    return (
        <div className="contain_main">
            <div className="container_titulo">
                <h1 className="titulo">Editor de Enlaces</h1>
            </div>
            <hr className="separacion" />
        <div className="register_container_mod">
            <div className="mod_nombre">
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={enlaceData.nombre || ''}
                    onChange={handleChange}
                    disabled={!editable}
                />
            </div>
            <div className="mod_apellidoM">
                <label>Apellido Paterno:</label>
                <input
                    type="text"
                    name="apellidoP"
                    value={enlaceData.apellidoP || ''}
                    onChange={handleChange}
                    disabled={!editable}
                />
            </div>
            <div className="mod_apellidoM">
                <label>Apellido Materno:</label>
                <input
                    type="text"
                    name="apellidoM"
                    value={enlaceData.apellidoM || ''}
                    onChange={handleChange}
                    disabled={!editable}
                />
            </div>
            <div className="mod_correo">
                <label>Correo Electrónico:</label>
                <input
                    type="text"
                    name="correo"
                    value={enlaceData.correo || ''}
                    onChange={handleChange}
                    disabled={!editable}
                />
            </div>
            <div className="mod_telefono">
                <label>Número de Teléfono:</label>
                <input
                    type="text"
                    name="telefono"
                    value={enlaceData.telefono || ''}
                    onChange={handleChange}
                    disabled={!editable}
                />
            </div>
            <div className="mod_dependencia">
                <label>Dependencia:</label>
                <input
                    type="text"
                    value={enlaceData.idDependencia}
                    disabled={edit===false}
                    readOnly
                />
            </div>
            <div className="mod_direccion">
                <label>Dirección:</label>
                <input
                    type="text"
                    value={enlaceData.direccion ? enlaceData.direccion.nombreDireccion : ''}
                    disabled={edit===false}
                    readOnly
                />
            </div>
            <div className="mod_adscripcion">
                <label>Adscripción:</label>
                <input
                    type="text"
                    value={enlaceData.idAdscripcion}
                    disabled={edit===false}
                    readOnly
                />
            </div>
            <div className="mod_cargo">
                <label>Cargo:</label>
                <input
                    type="text"
                    value={enlaceData.cargoEnlace ? enlaceData.cargoEnlace.nombreCargo : ''}
                    disabled={edit===false}
                    readOnly
                />
            </div>
            <div className="mod_button_container">
                {!editable && (
                    <>
                    <button className="green-button-mod" onClick={handleUpdate}>Actualizar</button>
                    <button className="yellow-button-mod" onClick={() => navigate('/enlaces')}>Volver</button>
                    </>
            )}
                {editable && (
                    <>
                        <button className="green-button-mod" onClick={handleSave}>Guardar</button>
                        <button className="yellow-button-mod" onClick={handleCancel}>Cancelar</button>
                    </>
                )}
                <button className="red-button-mod" onClick={handleDelete}>Eliminar Enlace</button>

            </div>
            {showModal && (
                <div className="modal-background">
                    <div className="modal-content">
                        <p>¿Está seguro que quiere eliminar este Enlace?</p>
                        <div className="modal-buttons">
                            <button className="green-button" onClick={confirmDelete}>Confirmar</button>
                            <button className="yellow-button" onClick={closeModal}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default ModEnlace;

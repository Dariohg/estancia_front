import React, { useState } from 'react';
import menosSvg from '../assets/menos.svg';
import masSvg from '../assets/mas.svg';
import '../styles/enlaces.css';

const Enlaces = () => {
    const data = [
        {
            nombre: 'Nombre1',
            correo: 'correo1@example.com',
            telefono: '123456789',
            dependencia: 'Dependencia 1',
            direccion: 'Direccion 1',
            adscripcion: 'Adscripcion 1',
            cargo: 'Cargo 1',
            accion: 'Activo',
        },
        {
            nombre: 'Nombre2',
            correo: 'correo2@example.com',
            telefono: '987654321',
            dependencia: 'Dependencia 2',
            direccion: 'Direccion 2',
            adscripcion: 'Adscripcion 2',
            cargo: 'Cargo 2',
            accion: 'Inactivo',
        },
        {
            nombre: 'Nombre3',
            correo: 'correo3@example.com',
            telefono: '567890123',
            dependencia: 'Dependencia 3',
            direccion: 'Direccion 3',
            adscripcion: 'Adscripcion 3',
            cargo: 'Cargo 3',
            accion: 'Activo',
        },
    ];

    const [openIndices, setOpenIndices] = useState([]);

    const toggleOpen = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter((i) => i !== index));
        } else {
            setOpenIndices([...openIndices, index].slice(-2));
        }
    };

    const Row = ({ item, index }) => {
        const isOpen = openIndices.includes(index);

        return (
            <>
                <tr>
                    <td>
                        <button className="icon-button" onClick={() => toggleOpen(index)}>
                            {isOpen ? <img src={menosSvg} alt="Menos" /> : <img src={masSvg} alt="Más" />}
                        </button>
                    </td>
                    <td>{item.nombre}</td>
                    <td>{item.correo}</td>
                    <td>{item.telefono}</td>
                    <td>{item.dependencia}</td>
                    <td>{item.direccion}</td>
                    <td>{item.adscripcion}</td>
                    <td>{item.cargo}</td>
                    <td>Acción</td>
                </tr>
                {isOpen && (
                    <tr>
                        <td colSpan="9"> {/* Ajuste aquí */}
                            <div className="detalle-container">
                                <table className="detalle-table">
                                    <thead>
                                    <tr>
                                        <th>Fecha de contrato</th>
                                        <th>Tipo de instalación</th>
                                        <th>Tipo de contrato</th>
                                        <th>Versión de contrato</th>
                                        <th>Estatus</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2020-01-05</td>
                                        <td>Nube</td>
                                        <td>Hosting</td>
                                        <td>Basico</td>
                                        <td>Activo</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                )}
            </>
        );
    };


    return (
        <div>
            <div className="container_titulo">
                <h1 className="titulo">Enlaces</h1>
            </div>
            <hr className="separacion" />
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar enlaces..."
                />
                <button className="search-button">Buscar</button>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th />
                        <th>Nombre</th>
                        <th>Correo Electrónico</th>
                        <th>Número de Teléfono</th>
                        <th>Dependencia</th>
                        <th>Dirección</th>
                        <th>Adscripción</th>
                        <th>Cargo</th>
                        <th>Acción</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <Row key={index} item={item} index={index} />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enlaces;

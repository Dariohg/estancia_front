import React, { useState } from 'react';
import menosSvg from '../assets/menos.svg';
import masSvg from '../assets/mas.svg';
import '../styles/enlaces.css';

const Enlaces = () => {
    const data = [
        {
            nombre: 'Nombre1',
            telefono: '123456789',
            correo: 'correo1@example.com',
            ubicacion: 'Ubicacion1',
            estatus: 'Activo',
        },
        {
            nombre: 'Nombre2',
            telefono: '987654321',
            correo: 'correo2@example.com',
            ubicacion: 'Ubicacion2',
            estatus: 'Inactivo',
        },
        {
            nombre: 'Nombre3',
            telefono: '567890123',
            correo: 'correo3@example.com',
            ubicacion: 'Ubicacion3',
            estatus: 'Activo',
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
                    <td>{item.telefono}</td>
                    <td>{item.correo}</td>
                    <td>{item.ubicacion}</td>
                    <td>{item.estatus}</td>
                    <td>Acción</td>
                </tr>
                {isOpen && (
                    <tr>
                        <td colSpan="7">
                            <div className="detalle-container">
                                <table className="detalle-table">
                                    <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Enlace</th>
                                        <th>Nombre</th>
                                        <th>Estatus</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2020-01-05</td>
                                        <td>www.example.com</td>
                                        <td>Nombre Detalle</td>
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
            <div className="title">Enlaces</div>
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
                        <th>Número de Teléfono</th>
                        <th>Correo Electrónico</th>
                        <th>Ubicación</th>
                        <th>Estatus</th>
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

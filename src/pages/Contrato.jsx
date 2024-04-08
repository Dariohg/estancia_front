import React from 'react';
import '../styles/contrato.css';

const Contrato = () => {
    const data = [
        {
            persona: 'Persona 1',
            tipoContrato: 'Contrato 1',
            version: 'Versión 1',
            ubicacion: 'Ubicación 1',
            fechaContrato: '2022-04-25'
        },
        {
            persona: 'Persona 2',
            tipoContrato: 'Contrato 2',
            version: 'Versión 2',
            ubicacion: 'Ubicación 2',
            fechaContrato: '2022-05-10'
        },
        {
            persona: 'Persona 3',
            tipoContrato: 'Contrato 3',
            version: 'Versión 3',
            ubicacion: 'Ubicación 3',
            fechaContrato: '2022-06-15'
        }
    ];

    return (
        <div>
            <div className="container_titulo">
                <h1 className="titulo">Contratos</h1>
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
            <table className="custom-table">
                <thead className="custom-thead">
                <tr className="custom-tr">
                    <th className="custom-th">Persona</th>
                    <th className="custom-th">Tipo de Contrato</th>
                    <th className="custom-th">Versión</th>
                    <th className="custom-th">Ubicación</th>
                    <th className="custom-th">Fecha de Contrato</th>
                </tr>
                </thead>
                <tbody className="custom-tbody">
                {data.map((item, index) => (
                    <tr key={index} className="custom-tr">
                        <td className="custom-td">{item.persona}</td>
                        <td className="custom-td">{item.tipoContrato}</td>
                        <td className="custom-td">{item.version}</td>
                        <td className="custom-td">{item.ubicacion}</td>
                        <td className="custom-td">{item.fechaContrato}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
};

export default Contrato;

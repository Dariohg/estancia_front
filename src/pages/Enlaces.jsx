import React, { useEffect, useState } from 'react';
import menosSvg from '../assets/menos.svg';
import masSvg from '../assets/mas.svg';
import '../styles/enlaces.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const URI = 'http://localhost:8000/enlace/status?estatus_id=1';

const Enlaces = () => {
    const [enlace, setEnlace] = useState([]);
    const [filteredEnlace, setFilteredEnlace] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredEnlace.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(filteredEnlace.length / rowsPerPage);
    const [openIndices, setOpenIndices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getEnlace();
    }, []);

    const getEnlace = async () => {
        const res = await axios.get(URI);
        setEnlace(res.data);
        setFilteredEnlace(res.data);
    };

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchValue(value);
        setCurrentPage(1); // Resetear a la primera página al hacer una búsqueda
        const filteredData = enlace.filter((enlace) =>
            enlace.nombre.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredEnlace(filteredData);
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const toggleOpen = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter((i) => i !== index));
        } else {
            setOpenIndices([...openIndices, index].slice(-2));
        }
    };

    const Row = ({ enlace, index }) => {
        const isOpen = openIndices.includes(index);

        return (
            <>
                <tr>
                    <td>
                        <button className="icon-button" onClick={() => toggleOpen(index)}>
                            {isOpen ? <img src={menosSvg} alt="Menos" /> : <img src={masSvg} alt="Más" />}
                        </button>
                    </td>
                    <td>{enlace.nombre} {enlace.apellidoP} {enlace.apellidoM}</td>
                    <td>{enlace.correo}</td>
                    <td>{enlace.telefono}</td>
                    <td>{enlace.idDependencia}</td>
                    <td>{enlace.direccion.nombreDireccion}</td>
                    <td>{enlace.idAdscripcion}</td>
                    <td>{enlace.cargoEnlace.nombreCargo}</td>
                    <td><button onClick={() => navigate(`/modEnlace/${enlace.idEnlace}`)}>Ver más</button></td>
                </tr>
                {isOpen && (
                    <tr>
                        <td colSpan="9">
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

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            if (i > 0 && i <= totalPages) {
                pageNumbers.push(
                    <button key={i} onClick={() => goToPage(i)}>{i}</button>
                );
            }
        }
        return pageNumbers;
    };

    return (
        <div className="container_enlace">
            <div className="container_titulo">
                <h1 className="titulo">Enlaces</h1>
            </div>
            <hr className="separacion" />
            <div className="tabla_enlace_titulo">
                <div className="tabla_titulo">Lista de enlaces</div>
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Buscar enlaces..."
                        value={searchValue}
                        onChange={handleSearch}
                    />
                    <button className="search-button">Buscar</button>
                </div>
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
                    {currentRows.map((enlace, index) => (
                        <Row key={index} enlace={enlace} index={index} />
                    ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
                    {renderPageNumbers()}
                    <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
                </div>
            </div>
        </div>
    );
};

export default Enlaces;

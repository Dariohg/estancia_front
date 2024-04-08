import React from "react";
import "../styles/addContrato.css";

const AddContrato = () => {
    return (
        <div>
        <div className="container_titulo">
            <h1 className="titulo">Agregar Contrato</h1>
        </div>
        <hr className="separacion" />
            <div className="formulario-container">

                <div className="contain_cliente">
                    <label htmlFor="cliente">Cliente:</label>
                    <select id="cliente">
                        <option value="cliente1">Cliente 1</option>
                        <option value="cliente2">Cliente 2</option>
                        <option value="cliente3">Cliente 3</option>
                    </select>
                </div>
                <div className="contain_contrato">
                    <label htmlFor="tipoContrato">Tipo de Contrato:</label>
                    <select id="tipoContrato">
                        <option value="contrato1">Contrato 1</option>
                        <option value="contrato2">Contrato 2</option>
                        <option value="contrato3">Contrato 3</option>
                    </select>
                </div>
                <div className="contain_fechaContrato">
                    <label htmlFor="fechaContrato">Fecha de Contrato:</label>
                    <input type="date" id="fechaContrato" />
                </div>


                <div className="contain_version">
                    <label htmlFor="versionContrato">Versión de Contrato:</label>
                    <select id="versionContrato">
                        <option value="version1">Versión 1</option>
                        <option value="version2">Versión 2</option>
                    </select>
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

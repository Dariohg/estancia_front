import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/nav.css";

export const Nav = () => {
    const [expandedOption, setExpandedOption] = useState(null);
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        if (expandedOption === option) {
            setExpandedOption(null);
        } else {
            setExpandedOption(option);
        }
    };

    const handleSubOptionClick = () => {
        setExpandedOption(null);
        navigate("/enlaces");
    };
    const navigateAddEnlace = () => {
        setExpandedOption(null);
        navigate("/addEnlace");
    };

    const navigateAddContrato= () => {
        setExpandedOption(null);
        navigate("/addContrato");
    };
    const navigateContrato= () => {
        setExpandedOption(null);
        navigate("/contrato");
    };


    return (
        <div className="contain_nav">
            <div className="contain_titulo">
                <div className="menu_title">Enlaces App</div>
            </div>
            <hr className="separator" />
            <div className="main_options">
                <div className="option" onClick={() => handleOptionClick("option1")}>Enlace</div>
                {expandedOption === "option1" && (
                    <div className="sub_options">
                        <div className="sub_option" onClick={handleSubOptionClick}>Listar</div>
                        <div className="sub_option" onClick={navigateAddEnlace}>Agregar</div>
                    </div>
                )}
                <div className="option" onClick={() => handleOptionClick("option2")}>Asignar Contrato</div>
                {expandedOption === "option2" && (
                    <div className="sub_options">
                        <div className="sub_option" onClick={navigateContrato}>Listar</div>
                        <div className="sub_option" onClick={navigateAddContrato}>Agregar</div>
                    </div>
                )}
                <div className="option" onClick={() => handleOptionClick("option3")}>Asignar Servicio</div>
                {expandedOption === "option3" && (
                    <div className="sub_options">
                        <div className="sub_option">Listar</div>
                        <div className="sub_option">Agregar</div>
                    </div>
                )}
                <div className="option" onClick={() => handleOptionClick("option4")}>Catalagos</div>
                {expandedOption === "option4" && (
                    <div className="sub_options">
                        <div className="sub_option">Organismos</div>
                        <div className="sub_option">Servicion</div>
                        <div className="sub_option">Suboption 3</div>
                    </div>
                )}
                <div className="option" onClick={() => handleOptionClick("option5")}>Option 5</div>
                {expandedOption === "option5" && (
                    <div className="sub_options">
                        <div className="sub_option">Suboption 1</div>
                        <div className="sub_option">Suboption 2</div>
                        <div className="sub_option">Suboption 3</div>
                    </div>
                )}
            </div>
        </div>
    );
};

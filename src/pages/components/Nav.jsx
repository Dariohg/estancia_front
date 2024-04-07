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

    return (
        <div className="contain_nav">
            <div className="contain_titulo">
                <div className="menu_title">Menu</div>
            </div>
            <hr className="separator" />
            <div className="main_options">
                <div className="option" onClick={() => handleOptionClick("option1")}>Option 1</div>
                {expandedOption === "option1" && (
                    <div className="sub_options">
                        <div className="sub_option" onClick={handleSubOptionClick}>Suboption 1</div>
                        <div className="sub_option">Suboption 2</div>
                        <div className="sub_option">Suboption 3</div>
                    </div>
                )}
                <div className="option" onClick={() => handleOptionClick("option2")}>Option 2</div>
                {expandedOption === "option2" && (
                    <div className="sub_options">
                        <div className="sub_option">Suboption 1</div>
                        <div className="sub_option">Suboption 2</div>
                        <div className="sub_option">Suboption 3</div>
                    </div>
                )}
                <div className="option" onClick={() => handleOptionClick("option3")}>Option 3</div>
                {expandedOption === "option3" && (
                    <div className="sub_options">
                        <div className="sub_option">Suboption 1</div>
                        <div className="sub_option">Suboption 2</div>
                        <div className="sub_option">Suboption 3</div>
                    </div>
                )}
                <div className="option" onClick={() => handleOptionClick("option4")}>Option 4</div>
                {expandedOption === "option4" && (
                    <div className="sub_options">
                        <div className="sub_option">Suboption 1</div>
                        <div className="sub_option">Suboption 2</div>
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

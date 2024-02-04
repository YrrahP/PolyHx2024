import React from 'react';
import './button.css'; // Assurez-vous d'inclure la feuille de style


const ButtonRegister = ({ text, style, onClick }) => {
    return (
        <button className="flat-button" style={style} onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonRegister;
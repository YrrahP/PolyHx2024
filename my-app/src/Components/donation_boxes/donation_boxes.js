import React from 'react';
import './donation_boxes.css'; // Assurez-vous d'inclure la feuille de style

const ButtonDonBox = ({ text, style }) => {
    return (
        <button className="flat-button" style={style}>
            {text}
        </button>
    );
};

export default ButtonDonBox;
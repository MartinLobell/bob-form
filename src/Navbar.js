import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar tc">
            <img src="./logo.png" className="narrowImage" alt="BoBLogo"/>
            <h1 className="f1 companyName" style={{ }}>
                B o B Form
            </h1>
        </div>
    )
};

export default Navbar;
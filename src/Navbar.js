import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar tc">
            <img src="./logo.png" className="narrowImage" alt="BoBLogo" style={{ margin: '17.5px', width: 100, height: 100, borderRadius: 400 / 2 }} />
            <h1 className="f1 companyName" style={{ }}>
                B o B Form
            </h1>
        </div>
    )
};

export default Navbar;
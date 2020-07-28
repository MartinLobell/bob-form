import React from 'react';
import './Sidenav.css';

function Sidenav() {
    return (
        <div className="sidenav tc">
            <img src="./logo.png" className="tc" alt="BoBLogo"/>
            <br />
            <div className="contactInfo">
                <h3>Want to place <br/> an order?</h3>
                <h2 className="f2">Contact</h2>
                <p>
                    Ola Denward<br />
                    Södra Gulåkravägen 61<br />
                    271 73 Köpingebro<br />
                    Sweden<br/>
                    <br />
                    [Insert email address]<br/>
                    [Insert phonenumber]
                </p>
            </div>
            <div className="socialMediaBtn">
                <a href="https://www.instagram.com/bob.form/?hl=sv" target="_blank" class="fa fa-instagram"></a>
            </div>
        </div>
    )
};

export default Sidenav;
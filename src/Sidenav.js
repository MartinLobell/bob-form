import React from 'react';
import './Sidenav.css';

function Sidenav() {
    return (
        <div className="sidenav tc">
            <img src="./logo.png" className="tc" alt="BoBLogo" style={{marginTop: '30px', width: 100, height: 100, borderRadius: 400 / 2 }} />
            <br />
            <div className="contactInfo">
                <h3>Want to place <br/> an order?</h3>
                <h2 className="f2">Contact</h2>
                <p>
                    [Insert name]<br />
                    [Insert street address]<br />
                    [Insert city & ZIP code]<br />
                    [Insert country]<br/>
                    <br />
                    mail.email@email.com<br/>
                    [Insert phonenumber]
                </p>
            </div>
            <div className="socialMediaBtn">
                <a href="#" target="_blank" class="fa fa-instagram"></a>
            </div>
        </div>
    )
};

export default Sidenav;
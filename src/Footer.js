import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer tc">
            <div className="narrowFooter">
                <h2>Contact</h2>
                <p>
                    Ola Denward<br />
                    Södra Gulåkravägen 61<br />
                    271 73 Köpingebro<br />
                    Sweden<br />
                    <br />
                    [Insert email address]<br />
                    [Insert phonenumber]
                </p>
            </div>
            <div>
                <h1 className="f4 tc companyName">
                    B o B Form
                </h1>
                <p>© Martin Lobell <a href="https://github.com/MartinLobell" target="_blank">Github</a></p>
            </div>
            <div className="socialMediaBtn narrowFooter">
                <a href="https://www.instagram.com/bob.form/?hl=sv" target="_blank" class="fa fa-instagram"></a>
            </div>
        </div>
    )
};

export default Footer;
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer tc">
            <div className="narrowFooter">
                <h2>Contact</h2>
                <p>
                    [Insert name]<br />
                    [Insert street address]<br />
                    [Insert city & ZIP code]<br />
                    [Insert country]<br />
                    <br />
                    mail.email@email.com<br />
                    [Insert phonenumber]
                </p>
            </div>
            <div>
                <h1 className="f4 tc companyName">
                    B o B Form
                </h1>
                <p>© Martin Lobell <a href="https://github.com/MartinLobell">Github</a></p>
            </div>
            <div className="socialMediaBtn narrowFooter">
                <a href="#" target="_blank" class="fa fa-instagram"></a>
            </div>
        </div>
    )
};

export default Footer;
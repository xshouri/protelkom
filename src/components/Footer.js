import React from "react";
import { useLocation } from 'react-router-dom'
 
const Footer = () => {
    if (useLocation().pathname !== "/kontakt") {
        
    return (
        <div className="footer-section section">
            <div className="info-footer">   
                <div className="info-contact container-60">
                    <h2>Kontakt</h2>
                    <p>PROTELKOM Sp. z o.o.</p>
                    <div className="row-section">
                        <div className="column-section">
                            <div className="contact-item"><div className="contact-icon"><i className="fa-solid fa-phone"></i></div><a href="tel:+48503517501">503 517 501</a></div>
                            <div className="contact-item"><div className="contact-icon"><i className="fa-regular fa-envelope"></i></div><a href="mailto:serwis@protelkom.pl">serwis@protelkom.pl</a></div>
                            <div className="contact-item"><div className="contact-icon"><i className="fa-brands fa-facebook-f"></i></div><a href="https://www.facebook.com/Protelkom" target="_blank">Facebook</a></div>
                            <div className="contact-item"><div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div><a href="https://www.google.com/maps/place/PROTELKOM+Telefony+Serwis+GSM/@50.321793,19.133602,14z/data=!4m5!3m4!1s0x0:0x2f63b9bb7d868b96!8m2!3d50.3212453!4d19.1298256?hl=pl&shorturl=1" target="_blank">ul. Marszałka J. Piłsudskiego 24 42-500 Będzin</a></div>
                        </div>
                        <div className="column-section">
                            <div className="contact-item"><div className="contact-icon">NIP</div>6252491615</div>
                            <div className="contact-item"><div className="contact-icon">REGON</div>527309152</div>
                            <div className="contact-item"><div className="contact-icon">KRS</div>0001088608</div>
                        </div>
                    </div>
                </div>
                <div className="worktime container-30">
                    <h2>Czas pracy</h2>
                    <div className="info-worktime">
                        <div>
                            <div>Poniedziałek - Piątek</div>
                            <div>9:00 - 17:00</div>
                        </div>
                        <div>
                            <div>Sobota</div>
                            <div>9:00 - 13:00</div>
                        </div>
                        <div>
                            <div>Niedziela</div>
                            <div>Nieczynne</div>
                        </div>
                    </div>
                </div>
            
            </div>
            <p className="copyrights">Copyright© 2005-2024 PROtelkom - Profesjonalny serwis GSM</p>
        </div>
    );
    }
};
 
export default Footer;
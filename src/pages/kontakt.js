import React from "react";
import Header from "../components/Header";
 
const Kontakt = () => {
    return (
        <main>
            <Header />
            <div className="contact-section section">
                
            <div>
                        <h2>Masz pytanie?</h2>
                        <form action="#">
                            <div className="form-row">
                                <div className="input-data">
                                <input type="text" required />
                                <label for="">Imię<span> *</span></label>
                                <div className="underline"></div>
                                </div>
                                <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label for="">Nazwisko<span> *</span></label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                <input type="text" required />
                                <div className="underline"></div>
                                <label for="">E-mail<span> *</span></label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data textarea">
                                    <textarea rows="8" cols="80" required></textarea>
                                    <br />
                                    <div className="underline"></div>
                                    <label for="">Wiadomość<span> *</span></label>
                                    <br />
                                    <div className="form-row">
                                        <button type="submit" className="submit-btn">
                                            <span class="circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Wyślij</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <div>
                        <h2>Znajdź nas tutaj</h2>
                        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.4260797798966!2d19.12726627647878!3d50.321301571567794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d099ec7c08e7%3A0x2f63b9bb7d868b96!2sPROTELKOM%20Telefony%20Serwis%20GSM!5e0!3m2!1spl!2spl!4v1724061856163!5m2!1spl!2spl" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen=""></iframe>
                    </div>
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
            </div>
        </main>
    );
};
 
export default Kontakt;
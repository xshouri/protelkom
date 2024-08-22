import React from "react";
import Header from "../components/Header";
 
const Serwis = () => {
    return (
        <main>
            <Header title="Serwis" />
            <div className="red-list-container section menu-space">
                <h2>Jak to działa?</h2>
                <div className="item-list"><div><h2 className="number-list">1</h2><div><h2 className="title-list">Kontakt</h2><p className="text-list">Skontaktuj się z nami telefonicznie lub przez formularz na stronie.</p></div></div><img className="img-list" src="" alt=""/></div>
                <div className="item-list"><div><h2 className="number-list">2</h2><div><h2 className="title-list">Diagnoza</h2><p className="text-list">Przeprowadzamy dokładną diagnozę problemu.</p></div></div><img className="img-list" src="" alt=""/></div>
                <div className="item-list"><div><h2 className="number-list">3</h2><div><h2 className="title-list">Naprawa</h2><p className="text-list">Nasz zespół przystępuje do naprawy sprzętu.</p></div></div><img className="img-list" src="" alt=""/></div>
                <div className="item-list"><div><h2 className="number-list">4</h2><div><h2 className="title-list">Odbiór</h2><p className="text-list">Po zakończeniu naprawy, odbierasz swój sprzęt gotowy do pracy.</p></div></div><img className="img-list" src="" alt=""/></div>
            </div>
            <div className="our-service section">
                <h2>Nasze usługi</h2>
                <div className="column-section">    
                    <div className="row-section">
                        <div>
                            <h2>Naprawa telefonów i tabletów</h2>
                            <ul>
                                <li>Reballing układów BGA</li>
                                <li>Wymiana wyświetlaczy i digitizerów</li>
                                <li>Regeneracja szyb, wyświetlaczy</li>
                                <li>Wymiana baterii, portów ładowania i złącz FPC</li>
                                <li>Usuwanie blokad (wzorów, PIN-ów, kont, FRP)</li>
                                <li>Aktualizacja oprogramowania i naprawa systemów operacyjnych</li>
                                <li>Usuwanie wirusów i złośliwego oprogramowania</li>
                                <li>Migracja i odzysk danych</li>
                                <li>Naprawa po zalaniu</li>
                                <li>Diagnostyka</li>
                            </ul>
                        </div>
                        <div className="container-50">
                            <img src="images/stanowiska.jpg" alt="stanowiska w protelkom" />
                        </div>
                    </div>
                    <div className="row-section">
                        <div className="container-50">
                            <h2>Naprawa laptopów i komputerów</h2>
                            <ul>
                                <li>Diagnostyka i naprawa usterek sprzętowych</li>
                                <li>Wymiana dysków twardych, pamięci RAM, kart graficznych</li>
                                <li>Naprawa i wymiana układów chłodzenia</li>
                                <li>Instalacja i konfiguracja systemów operacyjnych (Windows, macOS, Linux)</li>
                                <li>Optymalizacja i czyszczenie systemu</li>
                            </ul>
                        </div>
                        <div className="container-50">
                            <img src="images/stanowiska.jpg" alt="stanowiska w protelkom" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
 
export default Serwis;
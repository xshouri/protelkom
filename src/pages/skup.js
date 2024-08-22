import React from "react";
import Header from "../components/Header";
 
const Skup = () => {
    return (
        <main>
            <Header title="Skup" />
            <div className="section menu-space">
                <h2>Skup urządzeń</h2>
                <p>Masz nieużywane lub uszkodzone urządzenie, które zalega w szufladzie? Nie wyrzucaj go! Oferujemy szybki i prosty skup telefonów, komputerów, tabletów oraz innych urządzeń elektronicznych. Dzięki nam, zyskasz gotówkę za sprzęt, którego już nie potrzebujesz. Sprawdź, ile możesz zyskać – wystarczy, że zadzwonisz lub dostarczysz sprzęt do punktu, a my szybko przedstawimy Ci ofertę.</p>
            </div>
            <div className="red-list-container section">
                <h2>Jak to działa<span>?</span></h2>
                <div className="item-list"><div><h2 className="number-list">1</h2><div><p className="text-list">Skontaktuj się z nami telefonicznie lub przez formularz na stronie.</p></div></div></div>
                <div className="item-list"><div><h2 className="number-list">2</h2><div><p className="text-list">Przeprowadzamy dokładną diagnozę problemu.</p></div></div></div>
                <div className="item-list"><div><h2 className="number-list">3</h2><div><p className="text-list">Nasz zespół przystępuje do naprawy sprzętu.</p></div></div></div>
            </div>
            <div className="section wave-container">
                <h2 className="question-h2">Co odkupujemy<span>?</span></h2>
                <p>Smartfony, telefony, tablety, laptopy, komputery stacjonarne, monitory, konsole</p>
            </div>
            <div className="section">
                <h2>Sprzedaż urządzeń</h2>
                <p>Poszukujesz nowego telefonu, komputera lub innego sprzętu w korzystnej cenie? U nas znajdziesz szeroką ofertę sprawdzonych urządzeń, które przeszły gruntowny przegląd techniczny. Oferujemy urządzenia zarówno nowe jak i używane w doskonałym stanie technicznym, z gwarancją oraz wsparciem posprzedażowym.</p>
            </div>
            <div className="section">
                <h2 className="question-h2">Co znajdziesz w naszej ofercie<span>?</span></h2>
                <p><b>Telefony</b> – od najnowszych smartfonów po bardziej budżetowe modele. Każdy telefon jest przetestowany, a jego stan techniczny jest szczegółowo opisany.
                </p>
                <p><b>Komputery i laptopy</b> – idealne rozwiązania dla studentów, profesjonalistów i graczy. Nasze komputery to niezawodne maszyny, które sprostają każdemu zadaniu.</p>
                <p><b>Tablety i akcesoria</b> – sprawdzone tablety oraz szeroki wybór akcesoriów, które uczynią korzystanie z urządzeń jeszcze wygodniejszym.</p>
            </div>
            <div className="section">
                <div className="row-section">
                    <h2 className="question-h2 container-50">
                        Dlaczego warto<br />kupować u nas<span>?</span>
                    </h2>
                    <div className="scroll-item-container container-50">
                        <div className="scroll-item">
                            <h2 className="title-scroll-item">Gwarancja na każdy produkt</h2>
                            <p>Każde urządzenie objęte jest gwarancją, co daje Ci pewność bezproblemowego użytkowania.</p>
                        </div>
                        <div className="scroll-item">
                            <h2 className="title-scroll-item">Wsparcie techniczne</h2>
                            <p>Nasz zespół specjalistów jest gotowy, by pomóc Ci w każdym momencie.</p>
                        </div>
                        <div className="scroll-item">
                            <h2 className="title-scroll-item">Atrakcyjne ceny</h2>
                            <p>Oferujemy konkurencyjne ceny na wszystkie nasze produkty.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
 
export default Skup;
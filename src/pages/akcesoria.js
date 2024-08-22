import React from "react";
import ItemAccessories from "../components/ItemAccessories";
import Header from "../components/Header";

const Akcesoria = () => {
    return (
        <main>
            <Header title="Akcesoria" />
            <div className="red-section section menu-space">
                <h2>Szeroka oferta akcesoriów</h2>
                <p>Poszukujesz idealnych akcesoriów, które ułatwią Ci codzienne korzystanie z telefonu, komputera czy innego urządzenia elektronicznego? W naszym sklepie znajdziesz szeroki wybór wysokiej jakości produktów, które zostały starannie dobrane, aby spełniać Twoje oczekiwania.</p>
            </div>
            
            <div className="section">
                <h2 className="question-h2">Co znajdziesz w naszej ofercie<span>?</span></h2>
                <div className="accessories-container">
                    <div>
                        <h3 className="item-accessories-title">Telefon</h3>
                        <ItemAccessories
                        title="Pokrowce"
                        description="Stylowe i funkcjonalne pokrowce, które chronią Twój telefon przed codziennymi uszkodzeniami, zapewniając jednocześnie elegancki wygląd."
                        />
                        <ItemAccessories
                        title="Folie hydrożelowe"
                        description="Doskonała ochrona ekranu Twojego telefonu przed zarysowaniami i uszkodzeniami. Folie hydrożelowe są cienkie, elastyczne i łatwe w montażu."
                        />
                        <ItemAccessories
                        title="Szkła hartowane"
                        description="Wytrzymałe szkła hartowane, które chronią ekran Twojego urządzenia przed pęknięciami i zadrapaniami, zapewniając jednocześnie krystalicznie czysty obraz."
                        />
                        <ItemAccessories
                        title="Baterie GSM"
                        description="Wysokiej jakości baterie do różnych modeli telefonów, które zapewniają dłuższą żywotność i niezawodne działanie Twojego urządzenia."
                        />
                        <ItemAccessories
                        title="Części zamienne"
                        description="Szeroki wybór części zamiennych, które pomogą przywrócić pełną funkcjonalność Twojemu telefonowi."
                        />
                    </div>
                    <div>
                        <h3 className="item-accessories-title">Pamięć przenośna</h3>
                        <ItemAccessories
                        title="Karty pamięci"
                        description="Szeroka gama kart pamięci o różnej pojemności i szybkości, idealnych do przechowywania zdjęć, filmów i plików."
                        />
                        <ItemAccessories
                        title="Pendrive'y"
                        description="Praktyczne i trwałe pendrive'y, które umożliwiają łatwe przenoszenie i przechowywanie danych w dowolnym miejscu."
                        />
                    </div>
                    <div>
                        <h3 className="item-accessories-title">Inne urządzenia</h3>
                        <ItemAccessories
                        title="Uchwyty GPS"
                        description="Praktyczne uchwyty do montażu telefonów i nawigacji GPS w samochodzie, zapewniające wygodną i bezpieczną jazdę."
                        />
                        <ItemAccessories
                        title="Uchwyty do rowerów"
                        description="Bezpieczne i solidne uchwyty, które umożliwiają łatwe zamocowanie telefonu na kierownicy roweru. Idealne dla miłośników jazdy na rowerze, którzy potrzebują nawigacji lub chcą mieć dostęp do telefonu podczas jazdy."
                        />
                        <ItemAccessories
                        title="Kable USB"
                        description="Niezawodne kable USB do ładowania i przesyłania danych, dostępne w różnych długościach i typach."
                        />
                        <ItemAccessories
                        title="Przejściówki"
                        description="Wygodne przejściówki, które umożliwiają podłączanie różnych urządzeń do telefonów i komputerów."
                        />
                        <ItemAccessories
                        title="Ładowarki"
                        description="Szybkie i bezpieczne ładowarki do telefonów, tabletów i innych urządzeń elektronicznych."
                        />
                        <ItemAccessories
                        title="Adaptery"
                        description="Wszechstronne adaptery do podłączania urządzeń elektronicznych w różnych standardach."
                        />
                        <ItemAccessories
                        title="Podkładki chłodzące"
                        description="Wydajne podkładki chłodzące do laptopów, które zapewniają optymalną temperaturę pracy Twojego sprzętu. Dzięki temu zwiększają komfort pracy oraz chronią urządzenie przed przegrzaniem, co przedłuża jego żywotność i wydajność."
                        />
                        <ItemAccessories
                        title="Oraz wiele innych"
                        description="Znajdziesz u nas również szeroki wybór innych akcesoriów i urządzeń, które uczynią korzystanie z elektroniki jeszcze wygodniejszym i przyjemniejszym."
                        />

                    </div>
                    
                </div>
            </div>
        </main>
    );
};
 
export default Akcesoria;
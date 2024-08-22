import React from "react";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import Swiper core and required modules
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Testimonial from "../components/Testimonial";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    
    const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        
        gsap.fromTo(".logo-main-page", {
                y: "22vh",
                x: "18vw",
                scale: 6,
            }, {
                y: "0",
                x: "0",
                scale: 1,
                yPercent: 0,
                scrollTrigger: {
                
            scrub: true,
            trigger: ".dark-section",
            start: "top bottom",
            endTrigger: ".dark-section",
            end: "top center",
            ease: "easeInOut"
            }}
        )
    }, [])
    return (
        <main>
            <div className="header-main-page">
                <div className="header-bg-main-page"></div>
                <img className="logo-main-page" src="images/logo.svg" alt="logo-protelkom" />
            </div>
            <div className="header-main-page-section">
                <div className="header-main-page-subtitle">
                    <h1>Serwis GSM</h1>
                    <p>Naprawa telefonów komórkowych w Będzin</p>
                </div>
                <img src="images/bitmapa.png" className="header-logo" alt="logo protelkom"/>
            </div>
            <div className="dark-section section">
                <div className="with-u-section">
                    <div className="with-u-text">
                        <h3>Jesteśmy z wami od {(new Date().getFullYear())-2005} lat!</h3>
                        <p>Dzięki wieloletniemu doświadczeniu w branży telekomunikacyjnej, doskonale wiemy, jak ważne jest prawidłowe zdiagnozowanie usterki oraz dobór odpowiednich części, aby naprawa spełniała standardy najwyższej jakości. {(new Date().getFullYear())-2005} lat doświadczenia w naprawach telefonów pozwala nam diagnozować usterki z niemal 100% skutecznością.</p>
                    </div>
                    <img src="images/stanowiska.jpg" alt="stanowiska w protelkom" />
                </div>
            </div>
            <div className="section">
                <div className="scroll-section row-section">
                    <h2 className="question-h2">
                        Dlaczego warto <br />wybrać PROtelkom<span>?</span>
                    </h2>
                    <div className="scroll-item-container">
                        <div className="scroll-item">
                            <h2 className="title-scroll-item">Doświadczenie i profesjonalizm</h2>
                            <p>Nasi technicy mają wieloletnie doświadczenie i szeroką wiedzę techniczną.</p>
                        </div>
                        <div className="scroll-item">
                            <h2 className="title-scroll-item">Indywidualne podejście</h2>
                            <p>Każdy klient jest dla nas ważny, dlatego oferujemy spersonalizowane rozwiązania dopasowane do Twoich potrzeb.</p>
                        </div>
                        <div className="scroll-item">
                            <h2 className="title-scroll-item">Szybkość i efektywność</h2>
                            <p>Staramy się realizować naprawy w możliwie najkrótszym czasie.</p>
                        </div>
                        <div className="scroll-item">
                            <h2 className="title-scroll-item">Gwarancja jakości</h2>
                            <p>Używamy oryginalnych lub wysokiej jakości części zamiennych i oferujemy gwarancję na wykonane usługi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="red-section section">
                <h2 class="subtitle">Opinie naszych klientów</h2>
                <Swiper
                className="testimonials-swiper"
                // install Swiper modules
                modules={[Autoplay, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}        
                loop={true}    
                autoplay={{delay:7000}}
                speed={3000}   
                
                breakpoints={{
                    // when window width is >= 768px
                    800: {
                    slidesPerView: 2,
                    },
                    1200: {
                    slidesPerView: 3,
                    },
                }}         
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><Testimonial customerName="Magdalena O." customerFirstLetter="M" customerOpinion="Panowie bardzo pomocni i uprzejmi.
                                Choć mieli dużo zleceń, zrozumieli moją sytuację i przyjęli zlecenie.
                                Fachowość, uprzejmość i wyrozumiałość to rzadkość w usługach na rynku.
                                Polecono mi ten punkt i ja też go będę dalej polecać." /></SwiperSlide>
                    <SwiperSlide><Testimonial customerName="Adrian S." customerFirstLetter="A" customerOpinion="Szkoda, że tu tylko można 5 gwiazdek dać, bo serwis zasługuje na dużo więcej!
                            Polecam!" /></SwiperSlide>
                    <SwiperSlide><Testimonial customerName="Paweł B." customerFirstLetter="P" customerOpinion="Kolejna wizyta w tym miejscu i nadal wysoki poziom. Sprzęt, akcesoria tańsze od innych miejsc. Do każdego klienta podejście rewelacyjne, a jeżeli czegoś brak szybkie sprowadzenie. Profesjonalna pomoc w każdym przypadku bez naciągania. Sprzęt i akcesoria na każdą kieszeń. Tak trzymać 😎 godne polecenia…" /></SwiperSlide>
                    <SwiperSlide><Testimonial customerName="Stanisław P." customerFirstLetter="S" customerOpinion="Szybko, na miejscu i profesjonalnie. Miła obsługa, doradzi i podpowie, kolejny raz odwiedzam i za każdym razem jestem zadowolony. Wymiana baterii w telefonie, folia ochronna, etui, ładowarka. Dwa razy taniej niż w media... Do tego dodatkowa folia na zapas w cenie." /></SwiperSlide>
                    <SwiperSlide><Testimonial customerName="Eliza J." customerFirstLetter="E" customerOpinion="Pełen profesjonalizm! Panowie znają się na rzeczy! Ceny naprawy oraz akcesoria do telefonów na maxa konkurencyjne, porównując inne serwisy.
                            Polecam z czystym sumieniem!" /></SwiperSlide>
                    <SwiperSlide><Testimonial customerName="Michał A." customerFirstLetter="M" customerOpinion="Super obsługa, szybko zdjagnozowana awaria oraz szybko usunięta. Fachowa obsługa. Najlepszy punkt serwisowy w jakim byłem i z którego korzystałem! :)" /></SwiperSlide>                    
                </Swiper>
            </div>
        </main>
    );
};
 
export default Home;
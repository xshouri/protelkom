import React from "react";
class Navbar extends React.Component {
    showNav() {
        document.getElementsByClassName("navigation")[0].classList.toggle("active");
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <nav class="navigation">
            <div class="ham-btn" onClick={() => this.showNav()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="display-nav">
                <ul class="links-nav">
                    <li class="link-nav"><a href="/">O nas</a></li>
                    <li class="link-nav"><a href="/serwis">Serwis</a></li>
                    <li class="link-nav"><a href="/skup">Skup</a></li>
                    <li class="link-nav"><a href="/akcesoria">Akcesoria</a></li>
                    <li class="link-nav"><a href="/kontakt">Kontakt</a></li>
                </ul>
                <div class="info-nav">
                    <div class="worktime-nav">
                        <div>
                            <img src="images/logo-dark.png" alt="logo protelkom"/>
                            <p>Poniedziałek - Piątek</p>
                            <p>Sobota</p>
                            <p>Niedziela</p>
                        </div>
                        <div>
                            <p>9:00 - 17:00</p>
                            <p>9:00 - 13:00</p>
                            <p>Nieczynne</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
      );
    }
  }
 
export default Navbar;
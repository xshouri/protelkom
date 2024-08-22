import React from "react";
 
const Header = (props) => {
    return (
        <div className="header">
            <img src="images/logo-light.png" alt="logo protelkom" />
            <h1>{ props.title }</h1>
            <div></div>
        </div>
    );
};
 
export default Header;
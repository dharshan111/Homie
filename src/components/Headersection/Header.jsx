import React, { useState } from "react";
import "./Header.css";
import { FaHamburger } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler"
const Header = () => {
  const [toggle, setToggle] = useState()
  const getMenu = (toggle) => {
    if(document.documentElement.clientWidth <= 800){
      return{right: !toggle && "-100%"}
    }
  }
  return (
    <div className="header-wrapper">
      <div
        className="flexCenter paddings innerWidth header-container"
        data-aos="fade-down"
      >
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler 
          onOutsideClick={()=>{
            setToggle(false)
           }}
        
        > 
        <div className="flexCenter header-menu" style={getMenu(toggle)}>
          <a href="#residences">Residences</a>
          <a href="#explore">Explore</a>
          <a href="#contact">Contact Us</a>
          <a href="#getstart">Get Started</a>
          <button>
            <a href="">Sign In</a>
          </button>
        </div>
         </OutsideClickHandler> 
        <div className="menu-icon" onClick={() => setToggle((prev) => !prev)}>
          <FaHamburger size={24} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Header;

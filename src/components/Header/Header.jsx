import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpend,setMenuOpened]=useState(false);
  const getMenuStyle=(menuOpend) => {
    if(document.documentElement.clientWidth<=800){
      return {right:!menuOpend && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">

        <img src="./logo.png" width={100} alt="" />
        <OutsideClickHandler 
        onOutsideClick={()=>{setMenuOpened(false)}}
        >
        <div className="flexCenter h-menu" style={getMenuStyle(menuOpend)}>
          <a href="">Residencis</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

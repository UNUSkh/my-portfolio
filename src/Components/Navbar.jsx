import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { IoIosGitNetwork } from "react-icons/io";
import { LuPhone } from "react-icons/lu";

const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);
  const [selected, setselected] = useState("Home");
  function scrollHandler() {
    if (window.scrollY >= 10) {
      setnavbarblur(true);
    } else {
      setnavbarblur(false);
    }
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };
  var selecthome = () => {
    hideMenu();
    setselected("Home");
    console.log(selected);
  }
  var selectabout = () => {
    hideMenu();
    setselected("about"); 
  }
  var selectproject = () => {
    hideMenu();
    setselected("project"); 
  }
  var selectcontact = () => {
    hideMenu();
    setselected("contact"); 
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => {window.location.href = '/';}}
        className="Logo"
      >
        YAK
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={selecthome}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
         {selected=="Home"?<div className="selected"></div>:<div></div> } 
        </li>
        <li onClick={selectabout}>
          <Link to="/About">
            <BsPerson /> About
          </Link>
          {selected=="about"?<div className="selected"></div>:<div></div> }
        </li>
        <li onClick={selectproject}>
          <Link to="/Project">
            <IoIosGitNetwork /> Projects
          </Link>
          {selected=="project"?<div className="selected"></div>:<div></div> }
        </li>
        <li onClick={selectcontact}>
          <Link to="/Contact">
            <LuPhone />
            Contact
          </Link>
          {selected=="contact"?<div className="selected"></div>:<div></div> }
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

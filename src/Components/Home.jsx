import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
const Home = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize;
    };

    window.addEventListener('resize', handleResize());

    return () => {
    

    };
  }, []);
  return (
    <div>{windowSize>480?<div></div>:<Tilt>
    <h3 className="Avatar2"  >UNUS</h3>
  </Tilt> }
      <div className="HomePage">
        <div className="HomeText">
          <h1>HELLO THERE!</h1>
          <h1>
            I'M <b>KHOYA YOUNES AYOUB</b>
          </h1>
          <Type />
          <Link to="/About">
            <button>
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Contact">
            <button>
              Contact <CgPhone />
            </button>
          </Link>
        </div>
        {windowSize>480?<Tilt>
          <h3 className="Avatar"  >UNUS</h3>
        </Tilt>:<div></div> }
        
      </div>
      
    </div>
  );
};

export default Home;

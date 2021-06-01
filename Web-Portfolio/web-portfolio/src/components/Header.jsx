import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className="main-info">
        <h1>Chris Emerfoll</h1>
        <Typed 
        className="typed-text"
        strings={["Front-End: React, ReactNative, HTML/CSS, JavaScript","Back-End: Node.js, Express.js, Redux/Redux-Saga", "Full-Stack Web Developer"]}
        typeSpeed={35}
        backSpeed={15}
        />
        <a 
        href="#"
        className="btn-main-offer"
        >
            Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;

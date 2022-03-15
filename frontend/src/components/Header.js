import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as LoginSVG } from "../assets/Lock.svg";
import { ReactComponent as SignupSVG } from "../assets/Add-User.svg";
import { ReactComponent as FaqSVG } from "../assets/Question-Mark.svg";

// css
import "../styles/header.css"

function Header() {
  const [navStatus, setNavStatus] = useState("");
  const hamburguerBtn = useRef(null);

  const activateHamburguerBtn = () => {
    const lines = hamburguerBtn.current.children;
    lines[0].classList.toggle("hamburguer-btn-line__active-1");
    lines[1].classList.toggle("hamburguer-btn-line__hide");
    lines[2].classList.toggle("hamburguer-btn-line__active-2");

    navStatus === ""
      ? setNavStatus("banner--navigation__active")
      : setNavStatus("");
  }

  return (
    <header class="banner">
      <div
        class="banner--hamburguer-btn"
        ref={hamburguerBtn}
        onClick={activateHamburguerBtn}>
        <div class="hamburguer-btn-line"></div>
        <div class="hamburguer-btn-line"></div>
        <div class="hamburguer-btn-line"></div>
      </div>
      <h1 class="banner--title">Lister</h1>
      <Navigation navClass={navStatus} />
    </header>
  )
}

function Navigation(props) {
  const { navClass } = props;

  return (
    <nav class={`banner--navigation ${navClass}`}>
      <ul class="banner--links-ctn">
        <Link className="banner--link" to="/login">
          <LoginSVG />
          <li class="banner--list-link">Entrar</li>
        </Link>
        <Link className="banner--link" to="/signup">
          <SignupSVG />
          <li class="banner--list-link">Cadastrar</li>
        </Link>
        <Link className="banner--link" to="/faq">
          <FaqSVG />
          <li class="banner--list-link">FAQ</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Header;
import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  if (props.user.imie != "") {
  
    return (
      <header className="mdc-top-app-bar">
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <NavLink to="/">
              <div className="logoclass">
                <img src={require("./img/ekoru_logo.png")} alt="ekorulogo" />
              </div>
            </NavLink>
          </section>

          <section id="menu-elements">
            <div className="text-wrapper">
              <span>O nas</span>
            </div>

            <div className="text-wrapper">
              <span>Galeria</span>
            </div>

            <div className="text-wrapper">
              <span>Kontakt</span>
            </div>
          </section>

          <div className="img-wrapper">{/*<img src={require(`./img/${props.user.picture}`)} alt="profile_picture"/>*/}</div>

          <div className="text-wrapper" id="user-name">
            <span id="cos">{props.user.imie + " " + props.user.nazwisko}</span>
          </div>
          <div className="img-wrapper" id="pomoc">
            <i className="material-icons" id="arrow">
              keyboard_arrow_right
            </i>
          </div>

          <div id="navbar-list">
            <NavLink to="/account/details">
              <div className="list-element">
                <span>Szczegóły</span>
              </div>
            </NavLink>

            <NavLink to="/account/voc">
              <div className="list-element">
                <span>Słowniczek</span>
              </div>
            </NavLink>

            <NavLink to="/form/login">
              <div className="list-element">
                <span>Wyloguj</span>
              </div>
            </NavLink>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="mdc-top-app-bar">
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <NavLink to="/">
              <div className="logoclass">
                <img src={require("./img/ekoru_logo.png")} alt="ekorulogo" />
              </div>
            </NavLink>
          </section>

          <section id="menu-elements">
            <div className="text-wrapper">
              <span>Informacje</span>
            </div>

            <div className="text-wrapper">
              <span>Galeria</span>
            </div>

            <div className="text-wrapper">
              <span>Kontakt</span>
            </div>
          </section>

          <section className="navbar-button-area">
            <div className="loging-button">
              <NavLink to="/form/login">Zaloguj się</NavLink>
            </div>

            <div className="register-button"><NavLink to="/form/register">Zarejestruj się</NavLink></div>
          </section>
        </div>
      </header>
    );
  }
};

export default Navbar;

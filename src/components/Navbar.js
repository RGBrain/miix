import React from "react";
import './styles/Navbar.css';
import logo from './assets/Miix-black.png';

function Navigation() {
  return (
    <header>
      <section className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand spacer" href="#">
          <img
            src={logo}
            width="150"
            className="d-inline-block align-top"
            alt="Miix logo"
          />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              <a className="nav-link spacer" href="#">How it works</a>
              </li>
              <li className="nav-item">
              <a className="nav-link spacer" href="#">Login</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link spacer" href="#">Player</a>
              </li>
          </ul>
          </div>
      </nav>
      </section>
    </header>


  )
}

export default Navigation;



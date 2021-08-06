import React, { Component } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


const data = [
    {to: "/", title: "ГЛАВНАЯ"},
    {to: "/abaut", title: "О НАС"},
    {to: "/production", title: "ПРОИЗВОДСТВО "},
    {to: "/services", title: "УСЛУГИ"},
    // pages 
]



export default class Header extends Component {
  state = { a: false };
  showNav = () => {
    this.setState((state) => {
      return { a: !state.a };
    });
  };
  render() {
    return (
      <header className="bg-white     ">
        <div className=" containerHeader d-flex justify-content-between">
          <img
            className="logo"
            src="https://osten.vercel.app/images/osten.svg"
            alt=""
          />
          <h3 onClick={this.showNav} className="bars">
            <FontAwesomeIcon icon={faBars} />
          </h3>
        </div>
        <div className={` nav__menu   ${(this.state.a && "nav__start") || ""}`}>
            <ul>
              <li className="mdLinks text-center h5">
                {data.map(value => <Link className="links mt-3" to={value.to}>
                  {value.title}
                </Link>)}
              </li>
            </ul>
        </div>
      </header>
    );
  }
}

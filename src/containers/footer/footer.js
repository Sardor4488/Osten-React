import React, { Component } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTelegram,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 py-5">
              <h3>О НАС</h3>
              <p className="py-2">
                «Osten» — уникальный производитель, лифтов и эскалаторов в
                Средней Азии Компания «Osten» была основана в 2019 году!
              </p>
              <h3>МЫ В СОЦ.СЕТЯХ:</h3>
              <h3>
                <a href=""><FontAwesomeIcon className="mx-1 footerIcons text-white " icon={faTelegram} /></a>
                <a href="">  <FontAwesomeIcon className="mx-1 footerIcons text-white " icon={faInstagram} /> </a>
                <a href=""> <FontAwesomeIcon className="mx-1 footerIcons text-white " icon={faFacebook} /></a>
              </h3>
            </div>
            <div className="col-lg-4 py-5">
              <h3>ПОСЛЕДНИЕ НОВОСТИ</h3>
              <h5  className="py-2" ><a className="footerLinks" href="">Построен новый лифт</a></h5>
              <h5 className="py-2" ><a className="footerLinks" href="">РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</a></h5>
              <h5 className=""><a className="footerLinks" href="">ДИСПЕТЧЕРИЗАЦИЯ</a></h5>
            </div>
            <div className="col-lg-4 py-5">
              <h3>КОНТАКТЫ</h3>
              <p><span className="fw-bold h5">Номер телефона: </span>+998 (93) 511-11-17 +998 (91) 791-51-15</p>
              <p><span className="fw-bold h5">Электронная почта: </span>info@uzlift.uz</p>
              <p><span className="fw-bold h5">Адрес: </span>100077, город Ташкент, улица Мухаммад Юсуф 1А.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

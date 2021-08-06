import React, { Component } from "react";
import "./Advantages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHatWizard,
  faThumbsUp,
  faPersonBooth,
  faChartBar,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
// const advantages = [
//   {
//     icon: faHatWizard,
//     tittle: "Поиск и инновации",
//     text: "Мы ведем постоянный поиск и внедряем инноваций",
//   },
//   {
//     icon: faThumbsUp,
//     tittle: "Качество и цена",
//     text: "Предложение лифтов и эскалаторов высокого качества по конкурентным ценам",
//   },
//   {
//     icon: faPersonBooth,
//     tittle: "Индивидуальный подход",
//     text: "Индивидуальный и гибкий подход к каждому клиенту ",
//   },
//   {
//     icon2: faChartBar,
//     tittle2: "Широкий ассортимент",
//     text2: "Начиная с решений, оптимизированных для жилых и офисных зданий, заканчивая сложными проектами с эскалаторами и высокоскоростными лифтами ",
//   },
//   {
//     icon2: faCheck,
//     tittle2: "Гибкость",
//     text2: "Гибкость технологических решений и собственных прогнозов, ориентированных на потребности каждого здания ",
//   },
// ];
export default class Advantages extends Component {
  render() {
    return (
      <div className="back">
        <h1 className="text-center  pt-5 ">Преимущества</h1>
        <div className=" hrr bg-dark ">
          {" "}
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4  py-5">
              <div className="icons text-center h1">
                <FontAwesomeIcon icon={faHatWizard} />
              </div>
              <h3 className="text-center py-4">Поиск и инновации </h3>
              <h5 className="text-center">
                Индивидуальный и гибкий подход к каждому клиенту{" "}
              </h5>
            </div>
            <div className="col-lg-4  py-5">
              <div className="icons text-center h1">
                <FontAwesomeIcon icon={faThumbsUp} />
              </div>
              <h3 className="text-center py-4">Качество и цена </h3>
              <h5 className="text-center">
                Предложение лифтов и эскалаторов высокого качества по
                конкурентным ценам
              </h5>
            </div>
            <div className="col-lg-4  py-5">
              <div className="icons text-center h1">
                <FontAwesomeIcon icon={faPersonBooth} />
              </div>
              <h3 className="text-center py-4">Индивидуальный подход </h3>
              <h5 className="text-center">
              Индивидуальный и гибкий подход к каждому клиенту {" "}
              </h5>
            </div>
            <div className="col-lg-6  py-5">
              <div className="icons text-center h1">
                <FontAwesomeIcon icon={faChartBar} />
              </div>
              <h3 className="text-center py-4">Широкий ассортимент</h3>
              <h5 className="text-center">
                Начиная с решений, оптимизированных для жилых и офисных зданий,
                заканчивая сложными проектами с эскалаторами и высокоскоростными
                лифтами{" "}
              </h5>
            </div>
            <div className="col-lg-6  py-5">
              <div className="icons text-center h1">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <h3 className="text-center py-4">Гибкость</h3>
              <h5 className="text-center">
                Гибкость технологических решений и собственных прогнозов,
                ориентированных на потребности каждого здания{" "}
              </h5>
            </div>
            {/* {advantages.map((value,index) => {
                <div className="col-lg-4">
                    <div className="icon"><FontAwesomeIcon icon={value.icon}/></div>
                    <h1>{value.tittle}</h1>
                    <h5>{value.text}</h5>
                </div>
                
            })} */}
          </div>
        </div>
      </div>
    );
  }
}

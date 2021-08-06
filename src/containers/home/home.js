import React, { Component } from "react";
import "./home.css";
import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Services from "../services/services";
import Customer from "../Customer Reviews/Customer";
import Advantages from "../Advantages/Advantages";
import Results from "../results/results";
import Elavator from "../Elevator cabins/elavator";
import Partners from "../partners/partners";
import Footer from "../footer/footer";
export default class Home extends Component {
  render() {
    return (
      <div className="home mt-3">
        <div className="blur"></div>
        <div className="container containHome">
          <div className="textcolor">
            <Zoom>
              <h1 className="display-4 w-75 fw-bold">
                «Osten» — уникальный производитель, лифтов и эскалаторов в
                Средней Азии
              </h1>
            </Zoom>
            <Zoom>
              <h4 className="w-100 py-3">
                Компания «Osten» была основана в 2019 году!
              </h4>
            </Zoom>
            <Fade right>
              <div className="w-50">
                {" "}
                <Button className="button  " color="warning">
                  <b>ПОДРОБНЕЕ</b>
                </Button>
              </div>
            </Fade>
          </div>
        </div>
        {/* containerpages */}
        <Services />
        <Results />
        <Elavator />
        <Advantages />
        <Partners />
        <Customer />
        <Footer/>
      </div>
    );
  }
}

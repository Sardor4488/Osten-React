import React, { Component } from "react";
import "./Customer.css";
export default class Customer extends Component {
  render() {
    return (
      <div className="customer text-whitw py-5">
          <div className="blur"></div>
        <div className="costomerBlur">
          <h1 className="text-center  text-white pt-5 ">Отзывы клиентов</h1>
          <div className=" hrr bg-dark  bg-white">
            {" "}
            <hr />
          </div>
          <h2 className="text-center   pt-5 pb-3">JOHN DOE • PROPERTY INVESTOR</h2>
          <div className=" hrr bg-dark mb-5  bg-white">
            {" "}
            <hr />
          </div>
          <h3 className="text-center">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов.{" "}
          </h3>
        </div>
      </div>
    );
  }
}

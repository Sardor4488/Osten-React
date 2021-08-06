import React, { Component } from 'react'
import './results.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faSortAmountUp, faGlobeAsia,faRunning } from '@fortawesome/free-solid-svg-icons';
const resultss=[
    {
        icon:faSortAmountUp,
        number:300,
        text:"лифтов в год"
    },
    {
        icon:faGlobeAsia,
        number:2,
        text:"года на рынке"
    },
    {
        icon:faRunning,
        number:200,
        text:"эскалаторов в год"
    },
]
export default class Results extends Component {
    render() {
        return (
            <div className="results ">
                 
               <div className="py-5   ">
               
              <h1 className='text-center text-white pt-5 '>Результаты</h1>
                   <div className=' hrr text-white'> <hr/></div>
            
               <div className="row w-100 text-white  m-0">
               {resultss.map((value,index)=>{
                   return  <div className="col-sm-4 py-5">
                           <h1 className="display-3 fw-bold text-center"> <FontAwesomeIcon icon={value.icon}/></h1>
                           <h1 className="display-3 fw-bold text-center">{value.number}</h1>
                           <h2 className=" fw-bold text-center">{value.text}</h2>
                       </div>
                })}
 
              </div>
            </div>
            </div>
        )
    }
}

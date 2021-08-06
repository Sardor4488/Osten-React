import React, { Component } from 'react'
import "./services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';
import { faEdit, faBriefcase,faCopy,faTools } from '@fortawesome/free-solid-svg-icons';
const  servise=[
    {
        icon:faEdit,
        tittle:"ПРОЕКТИРОВАНИЕ",
        text:"ПОДРОБНО ПРО ПРОЕКТИРОВАНИЕ"
    },
    {
        icon:faBriefcase,
        tittle:"МОНТАЖ",
        text:"ПОДРОБНО ПРО МОНТАЖ"
    },
    {
        icon:faCopy,
        tittle:"ЗАПАСНЫЕ ЧАСТИ",
        text:"ПОДРОБНО ПРО ЗАПАСНЫЕ ЧАСТИ"
    },
    {
        icon:faTools,
        tittle:"РЕМОНТ",
        text:"ПОДРОБНО ПРО РЕМОНТ"
    }
]
export default class Services extends Component {

   
    render() {
        return (
            <div className='p-5 back'>
                 
                <h1 className='text-center'>Наши услуги</h1>
                <div className='hr text-white'> <hr /></div>
                <div className='  p-5'>
                    <div className="row w-100">
                       
                            {servise.map((item,index) => {
                                 return <div className="col-sm-6    col-md-6 col-lg-3 my-2">
                                 <Fade button> <div className='cardServise shadow'>
                                         <h1 className='text-center py-5'><FontAwesomeIcon icon={item.icon}/> </h1>
                                         <h5 className='text-center serviceCardItem w-100'>{item.tittle}</h5>
                                         <p className='text-center'>{ item.text}</p>
                                  </div>
                               </Fade></div>
                                })
                            }
                           
                        
                    </div>
                </div>
            </div>
        )
    }
}

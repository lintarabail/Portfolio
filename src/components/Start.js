import React from 'react';
import './Start.css';
import { Link } from "react-scroll";


import rightimg from '../img/picintro.png'
import web1 from '../img/web1.png'
import web2 from '../img/web2.png'
import web3 from '../img/web3.png'


const Start = () => {

  return (

    <div className="intro">

      <div className="i-name">
        <span>Linta Rabail</span>
        <span>Full stack developer </span>
        <span> With 3 years of experience...</span>
        <Link spy={true} to='Form' smooth={true}>
        <button className="introbutton">
         <a href="/">Hire Me</a> 
        </button>
        </Link>
        {/* <div className="icons">
          <img src={icon1}  alt="dowloading" height={100} width={100} className="icon1" />
          <img src={icon2} alt="dowloading" height={100} width={100} className="icon2" />
          <img src={icon3} alt="dowloading" height={100} width={100}
            className="icon3" />
        </div> */}
          <img className='pic' src={rightimg} alt="" />
          <img  className='web1' src={web1} height={500} width={500} alt="" />
          <img className='web2' src={web2} height={500} width={500} alt="" />
          <img className='web3' src={web3} height={500} width={500} alt="" />
          
        
        </div>
       
      

      </div>
      )
}





      export default Start
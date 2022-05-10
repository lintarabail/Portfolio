import React from 'react'
import './Work.css'
import fiver from '../img/fiver.png';
import amaz from '../img/amaz.png';
import up from '../img/up.png';
import likn from '../img/in.png';
import fb from '../img/fb.png';
import {motion} from 'framer-motion';


const Work = () => {
  return (
    <div className="work">
         <div className="CV">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit adipisicing elit. Molestiae, fugit.
          <br />
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <button className="serbtn">Hire Me </button>
      </div>
     {/* right side */}
     <div className="right">
         <motion.div
         initial={{rotate:96}}
         whileInView={{rotate:0}}
         viewport={{margin:'40px'}}
         transition={{duration:8.5, type:'spring'}}

         className="maincir">
             <div className="seccir">
                <img src={up} height={100} width={200} alt="" />
             </div>
             <div className="seccir">
                <img src={likn} height={100} width={200} alt="" />
             </div>
             <div className="seccir">
                <img src={fb} height={100} width={200} alt="" />
             </div>
             <div className="seccir">
                <img src={amaz} height={100} width={200} alt="" />
             </div>
             <div className="seccir">
                <img src={fiver} height={120} width={200} alt="" />
             </div>
         </motion.div>
         {/* bg circle */}
         <div className="bg-cir purple"></div>
         <div className="bg-cir pink"></div>
     </div>
    </div>
  )
}

export default Work



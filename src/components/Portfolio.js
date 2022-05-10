import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
// import c1 from '../img/card1.jpeg'
// import c2 from '../img/c2.jpg'
// import c3 from '../img/c3.jpg'
// import c4 from '../img/c4.jpg'
import portfolio from '../img/1.jpg'
import 'swiper/css';

const Portfolio = () => {
  return (
   <div className="portfolio" id='Portfolio'>
       {/* heading */}
       <span>Recent Projects</span>
       <span>Portfolio</span>
       {/* slider */}
       <Swiper
       spaceBetween={30}
       slidesPerView={3}
       grabCursor={true}
       className='portfolio-slider'
       >
           <SwiperSlide>
            <img src={portfolio} alt="" />
           </SwiperSlide>
           <SwiperSlide>
               <img src={portfolio} alt="" />
           </SwiperSlide>
           <SwiperSlide>
               <img src={portfolio} alt="" />
           </SwiperSlide>
           <SwiperSlide>
               <img src={portfolio} alt="" />
           </SwiperSlide>
       </Swiper>

   </div>
  )
}

export default Portfolio
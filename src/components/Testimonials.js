import React from 'react';
import './Testimonials.css';
import {Swiper,SwiperSlide} from 'swiper/react';
// import c1 from '../img/card1.jpeg';
// import c2 from '../img/c2.jpg';
// import c3 from '../img/c3.jpg';
// import c4 from '../img/c4.jpg';
import avtr from '../img/avtr.jpg'
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
   const clients =[
       {
           img:avtr,
          review: "I could never imagine a girl can be that much good in web development, she's one of the best developer I've ever worked with. I'd highly recommend her for my future projects as well as for other's"
       },
       {
           img:avtr,
          review: "I could never imagine a girl can be that much good in web development, she's one of the best developer I've ever worked with. I'd highly recommend her for my future projects as well as for other's"
       },
       {
           img:avtr,
          review: "I could never imagine a girl can be that much good in web development, she's one of the best developer I've ever worked with. I'd highly recommend her for my future projects as well as for other's"
       },
       {
           img:avtr,
          review: "I could never imagine a girl can be that much good in web development, she's one of the best developer I've ever worked with. I'd highly recommend her for my future projects as well as for other's"
       },
       {
           img:avtr,
          review: "I could never imagine a girl can be that much good in web development, she's one of the best developer I've ever worked with. I'd highly recommend her for my future projects as well as for other's"
       },
       {
           img:avtr,
          review: "I could never imagine a girl can be that much good in web development, she's one of the best d,eveloper I've ever worked with. I'd highly recommend her for my future projects as well as for other's"
       },
       {
           img:avtr,
          review: "I could never imagine a girl can be that much good in web development, she's one of the best developer I've ever worked with. I'd highly recommend her for my future projects as well as for other's"
       },
       {
           img:avtr,
          review: "I could never imagine a girl can be that much good in web development, she's one of the best developer I've ever worked with. I'd highly recommend her for my future projects as well as for other's"
       }
   ]
  return (
    
<div className="wrapper" id='Testimonials'>
    <div className="t-heading">
        <span>Clients Always Get</span>
        <span> Expectional Work </span>
        <span>from me...</span>
    </div>
    {/* slidder */}
    <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{clickable : true}}
    grabCursor={true}
    >
        {clients.map((client,index)=>{
            return(
                <SwiperSlide key={index}>
                   <div className="testi">
                    <img src={client.img} alt="" />
                    <span>{client.review}</span>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
</div>

    )
}

export default Testimonials
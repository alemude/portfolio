import React from 'react'
import "./Testimonials.css"
import  T1 from "../../assets/T1.png"
import  T2 from "../../assets/T2.png"
import  T3 from "../../assets/T3.png"

import {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Testimonials = () => {
  const data=[
    {
avatar:T1,
name:'Bahir dar university project evaluator',
review:'Your project is very good. you have done the project in short time with quality'
    },
   { avatar:T2,
name:'Dan Energy PLC',
review:'Keep it up, this work is useful for students. teach child is doing for the next generation'
    },
   { avatar:T3,
name:'Bahir dar Zuria woreda court',
review:'Your project is not only use for our woreda but also it should be for all Courts in Ethiopia.'
    },
//    {
//      avatar:A1,
// name:'Lingerh Wondmieneh',
// review:'Get your first month free, then enjoy your annual plan for just $29/month >Get your first month free, then enjoy your annual plan for just $29/month'
//     },
  ]
  return (
    <section id='testimonials'>
   <h5 className='padding-left'>Review from clients</h5>
    <h2 className='padding-left'>Testimonials</h2>
    <Swiper className="container testimonial_container"
    modules={[Pagination,Navigation ]}
    spaceBetween={40}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
    {data.map(({avatar,name,review})=>{
      return(
        <SwiperSlide className="testimonial" >
        <div className="client_avatar">
         <img src= {avatar} alt='client_avatar'/>
    </div>
    <h5 className='client_name'>{name}</h5>
    <small className='client_review'>{review}</small>
        </SwiperSlide>
      )
    })} 
    </Swiper>
    </section>
  )
}

export default Testimonials

'use client'
import React from 'react';
import { register } from 'swiper/element/bundle'
import {  Autoplay,  } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'



register()

export default function PartnersSection(): JSX.Element {
   
return(
 <section className="partners_container">
  <h2> Our partners</h2>  
  <Swiper
    modules={[Autoplay]}
    slidesPerView={4}
    spaceBetween={30}
    autoplay={{delay: 800}}
    loop={true}
  >
    <SwiperSlide>
      <Image className='object-cover' src='/24-social.png' alt='24 social logo' height={70} width={150}/>
      </SwiperSlide>   
    <SwiperSlide>
      <Image className='object-cover' src='/ad--virals.png' alt='ad virals logo' height={70} width={150}/>
      </SwiperSlide>   
    <SwiperSlide>
      <Image className='object-cover' src='/ANCHOR.png' alt=' logo' height={70} width={150}/>
      </SwiperSlide>   
    <SwiperSlide>
      <Image className='object-cover' src='/arab_gen.png' alt='arab gen logo' height={70} width={150}/>
      </SwiperSlide>   
    <SwiperSlide>
      <Image className='object-cover' src='/clever-converters.png' alt='clever converters logo' height={70} width={150}/>
      </SwiperSlide>   
    <SwiperSlide>
      <Image className='object-cover' src='/foxtail.png' alt='foxtail  logo' height={70} width={150}/>
      </SwiperSlide>   
    <SwiperSlide>
      <Image className='object-cover' src='/growth-gurus.png' alt='growth gurus logo' height={70} width={150}/>
      </SwiperSlide>   
    <SwiperSlide>
      <Image className='object-cover' src='/interprised.png' alt='Interprised logo' height={70} width={150}/>
      </SwiperSlide>   
    <SwiperSlide>
      <Image className='object-cover' src='/rewize.png' alt='Rewize logo' height={70} width={150}/>
      </SwiperSlide>   
    <SwiperSlide>
      <Image className='object-cover' src='/siob_media.png' alt='Siob media logo' height={70} width={150}/>
      </SwiperSlide>   
    <SwiperSlide>
      <Image className='object-cover' src='/tales_of_aceventures.png' alt='Tales of Ace Ventures logo' height={70} width={150}/>
      </SwiperSlide>       
  </Swiper>
 </section>
)
}
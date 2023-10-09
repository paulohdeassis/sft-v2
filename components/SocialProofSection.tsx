'use client'
import React from 'react';
import { register } from 'swiper/element/bundle'
import {  Pagination, Autoplay,  } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'



register()

export default function SocialProofSection() {

  return (
    <section className="social_proof">
      <h2>OUR SUCCESS STORIES</h2>

      <Swiper
       
        modules={[Pagination, Autoplay]}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={10}
        autoplay={{delay: 1000}}
        loop={true}
        pagination={{clickable:true}}
        className='swiper-wrapper'
      >
        
        <SwiperSlide className='swiper-slide'> 
        
            <h4>In just 2 weeks of working together
                <span className='text-main-purple font-bold'> we managed 
                    to secure more signed appointments through 
                    ads than were achieved in the entire previous year</span>
            </h4>
                <div className="card_footer">
                  <Image src='/multident.png' alt='multident logo' height={64} width={64} className='rounded-full' />
                    <div className="footer_right">
                        <h4>MULTIDENT</h4>
                        <p>Dental Clinic</p>
                    </div>
                </div>
       
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'> 
          <h4>In the inaugural month, we accomplished a 
            <span className='text-main-purple font-bold'> quadruple 
                growth in revenue and achieved an impressive ROI of 9.5, </span> 
                showcasing our impactful results for the client.0 units

            </h4>    
                <div className="card_footer">
                    <Image src='/vibes_fashion.png' alt='vibes fashion logo' height={64} width={64} className='rounded-full' />
                    <div className="footer_right">
                        <h4>VIBES FASHION​</h4>
                        <p>Ecommerce</p>
                    </div>
                </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'> 
            <h4> Within the initial month, we orchestrated an impressive
              <span className='text-main-purple font-bold'> fourfold surge in revenue, 
                  coupled with a commendable ROI of 8.7. </span>
            </h4>    
            <div className="card_footer">
              <Image src='/veena.png' alt='veena logo' height={64} width={64} className='rounded-full' />
              <div className="footer_right">
                <h4>VEENA​</h4>
                <p>Ecommerce</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
          <h4> After almost 2 years of managing their social pages, 
                user engagement on both the website and social media 
                pages experienced an impressive surge, increasing 
                by<span className='text-main-purple font-bold'> over three-fold.</span>
            </h4>    
                <div className="card_footer">
                  <Image src='/harcouts.png' alt='harcouts logo' height={64} width={64} className='rounded-full' />
                    <div className="footer_right">
                        <h4>Harcourts​</h4>
                        <p>Real Estate Agency</p>
                    </div>
                </div>
          </SwiperSlide>
          
          <SwiperSlide className='swiper-slide'>
          <h4> Achieving a <span className='text-main-purple font-bold'> 25% conversion rate</span> 
                from inquiries to appointments, we succeeded for Surgical Solutions. 
                Our optimized ad spend and high-converting keywords led to a
                <span className='text-main-purple font-bold'> 20% reduction in cost per lead</span>,
                  establishing cost-effectiveness.
            </h4>    
                <div className="card_footer">
                    <Image src='/surgical-solutions.png' alt='surgical solutions logo' height={64} width={64} className='rounded-full' />
                  
                    <div className="footer_right">
                        <h4>SURGICAL SOLUTIONS​</h4>
                        <p>Plastic Surgeon </p>
                    </div>
                </div>
          </SwiperSlide>
        <div className="swiper-slide">
            
        </div> 
      </Swiper>  

    </section>
  )
}

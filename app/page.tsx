/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Image from 'next/image'
import { register } from 'swiper/element/bundle'
import {  Pagination, Autoplay,  } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CountUp from 'react-countup';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'


register()


export default function Home() {
  return (
    <>
     <section className="hero_container">
        <div className="hero">
            <div className="hero_txt">

                <h1 className='mt-16'>Next-Level Marketing Collaboration</h1>
                <Image  className="mobile_img" src="/hero.png"  height={400} width={600} alt='image of a woman writting on a tablet' />
                <p>
                    We are a dynamic alliance of marketing agencies, uniting partners worldwide.
                    Our collaborative creativity delivers unrivaled results directly to you. Each 
                    partner excels in their niche, ensuring comprehensive expertise for your marketing needs.
                    Together, we drive success, exceeding expectations. Welcome to our limitless world 
                    of transformative outcomes.
                    </p>
            </div>
            <Image  className="desktop_img" src="/hero.png"  height={450} width={600} alt='image of a woman writting on a tablet' />
        </div>
        <h2 className="accent_text">GROW YOUR BUSINESS</h2>
      </section>

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
     
      <section className="numbers_container">
        <div className="number_counter">
            <div className="counter_text">
                <CountUp start={0} prefix='+' end={350} />
            </div>
            <p className="number_label">clients</p>
        </div>
        <div className="number_counter">
            <div className="counter_text">
              <CountUp start={0} prefix='+' end={21} suffix='M' />
            </div>
            <p  className="number_label">invested in ads</p>
        </div>
        <div className="number_counter">
            <div className="counter_text">
            <CountUp start={0} prefix='+' end={160} suffix='M' />
            </div>
            <p  className="number_label">generated income to our clients</p>
        </div>
      </section>
      <section className="steps">
    <h2>
        Our proven 4-step process has helped 
        countless businesses turn their revenue 
        around and achieve their revenue goals
    </h2>

    <h3>Here's how it works:</h3>

    <div className="steps_container">
        <div className="step">
            <h3 className="number">1.</h3>
            <h3>Deep Study</h3>
            <p>
                We start by doing a deep dive into 
                your ideal client's mind. We analyze your 
                business to understand your numbers and 
                where you want to go. We figure out exactly 
                who we want to sell to and how to get those leads.
            </p>
        </div>
        <div className="step">
            <h3 className="number">2.</h3>
            <h3>Irresistible Offer</h3>
            <p>
                Next, we help you transform your offer into one 
                that your prospect will feel stupid saying no to.
                Just by making this small change, we have completely 
                turned around the business for many of our clients.
            </p>
        </div >
        <div className="step"> 
            <h3 className="number">3.</h3>
            <h3>Automate</h3>
            <p>
                After creating an offer that people can't refuse,
                we create your sales funnel to generate ready-to-buy 
                burning hot leads consistently. We also set up a chatbot 
                automation to close the leads without needing you to lift 
                a finger. It's all done by robots.
            </p>
        </div>
        <div  className="step">
            <h3 className="number">4.</h3>
            <h3>Dominate </h3>
            <p>
                Finally, with everything connected, you'll have a 
                customer acquisition system that can bring you as 
                many customers as you can handle, whenever you want, 
                100% on demand. We handle everything from soup to nuts.
            </p>
        </div>
    </div>
  </section>
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
      <section className="who_worked">
          <h2>Who We've Worked With:</h2>
          <h4>Our agency has worked with a variety of businesses, including:</h4>
          <Image  src='/perfis.webp' alt='image of multiple instagram profiles'   className='who-worked-img' height={1200} width={1200}/>
    </section>  

    <div className="bg-dark-grey text-center p-8 text-white ">
        <p>2023 © <span className='font-black text-lg'>MG Media.</span> All rights reserved | Privacy Policy</p>
    </div>
    </>
  )
}

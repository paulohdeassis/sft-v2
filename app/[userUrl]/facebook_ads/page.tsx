import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <section className="service_hero">
    <div className="service_txt">
        <h1>Facebook Ads:</h1>
        <Image className="mobile_img service_img" src='/facebook_ads.jpg' alt='picture of facebook ads dashboard' width={500} height={500}/>
        <p>
            At MG Media, we understand the importance of social media 
            advertising in today’s digital age. With over a billion 
            active users, Facebook Ads presents an incredible opportunity 
            to reach your target audience and achieve your business goals.
        </p>

        <p>
            Our team of experts can help you craft compelling ad copy 
            and create eye-catching visuals that resonate with your
             audience and drive engagement. With our proven strategies 
             and advanced targeting options, we can help you reach over 
             a million potential clients a month for your business.  
        </p>
        <p>
        Don’t miss out on the opportunity to leverage Facebook Ads for your 
        business – contact us today to learn more.
        </p>
    </div>
     <Image className="desktop_img service_img" src='/facebook_ads.jpg' alt='picture of facebook ads dashboard' width={500} height={500}/>  
   </section>
   )
}

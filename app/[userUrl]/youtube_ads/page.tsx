import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
   
    <section className="service_hero">
    <div className="service_txt">
        <h1>YOUTUBE ADS:</h1>
        <Image className="mobile_img service_img" src='/youtube_ads.jpg' height={400} width={400} alt='picture of youtube ads dashboard' />
        <p>
            With billions of active users, YouTube presents a 
            massive opportunity for businesses looking to 
            reach a wider audience. Our YouTube Ads services 
            can help you tap into this potential and create 
            compelling video content that resonates with your target audience.
        </p>

        <p>
            Whether you’re looking to drive traffic to your website, 
            promote a new product, or increase brand awareness, we
            have the expertise and tools to help you achieve your 
            goals. We’ll work with you to create engaging ad 
            content that stands out and captures the attention of your target audience. 
        </p>
        <p>
            Don’t miss out on the opportunity to leverage YouTube 
            Ads for your business – contact us today to learn more.
        </p>
    </div>
    <Image className="desktop_img service_img" src='/youtube_ads.jpg' height={400} width={400} alt='picture of youtube ads dashboard' />
   </section>
  )
}

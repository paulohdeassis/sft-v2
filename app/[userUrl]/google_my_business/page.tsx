import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <section className="service_hero">
    <div className="service_txt">
        <h1>GOOGLE MY BUSINESS:</h1>
        <Image className="mobile_img service_img" src='/google_my_business.jpg' height={400} width={400} alt='picture of google my business dashboard' />
        <p>
            When potential customers search for your business online,
            you want to make sure that you’re easy to find. That’s
            where Google My Business comes in. This powerful tool
            allows you to manage your business’s online presence
            across Google, including Search and Maps. 
        </p>

        <p>
            At MG Media, we can help you create and optimize your 
            Google My Business listing to ensure that you’re 
            reaching the right people and providing them with 
            accurate information about your business. By doing so, 
            you’ll be able to boost your visibility online and 
            connect with potential customers more effectively.  
        </p>
        <p>
            Contact us today to learn more about how our 
            Google My Business services can benefit your business.
        </p>
    </div>
    <Image className="desktop_img service_img" src='/google_my_business.jpg' height={400} width={400} alt='picture of google my business dashboard' />
   </section>
  )
}

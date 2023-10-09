import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    
   <section className="service_hero">
   <div className="service_txt">
       <h1>LEAD GENERATION:</h1>
       <Image className="mobile_img service_img" src='/lead_generation.jpg' height={400} width={400} alt='picture of a man point to the word leads written on a board' />
       <p>
           At MG Media, we understand that lead generation is the 
           lifeblood of any business. That’s why we offer a range
           of lead generation services to help you grow your business
           and increase your revenue. 
       </p>

       <p>
           Our team of experts has years of experience building 
           effective and trackable lead generation strategies that 
           can help you grow in a sustainable and predictable way. 
           We work with you to understand your business goals and 
           create customized lead generation solutions that are 
           tailored to your specific needs. 
       </p>
       <p>
           With our lead generation services, you can be confident 
           that you’re getting high-quality leads that will 
           convert into paying customers.
       </p>
   </div>
   <Image className="desktop_img service_img" src='/lead_generation.jpg' height={400} width={400} alt='picture of a man point to the word leads written on a board' />
  </section>
   
  )
}

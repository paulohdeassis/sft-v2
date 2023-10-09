import React from 'react'
import Image from 'next/image'
export default function  ContactSection() {
  return (
   
    <section className="contact_container">
      <Image className='contact_img' src='/contact_img.png' alt='picture of a woman having a meeting in her computer'  height={600} width={600} />
    
    <div className="contact_txt">
        <h2>Contact Us</h2>
        <p>
          Don’t hesitate to reach out to us for any 
          assistance or inquiries. We value your needs
          and are dedicated to providing exceptional support. 
          Our team is ready to listen, understand, and work 
          with you to achieve your goals. Contact us today, 
          and let’s embark on a collaborative journey to bring
          your vision to life.
        </p>

         <div className="contact_btn"><a href="#footer">Reach out</a></div>

    </div>
   </section>
  )
}

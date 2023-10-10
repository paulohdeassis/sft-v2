import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <section className="service_hero">
    <div className="service_txt">
        <h1>LANDING PAGES:</h1>
        <Image className="mobile_img service_img" src='/landing_page.jpg' height={400} width={400} alt='pictures of multiple landing pages' />
        <p>
            When it comes to digital marketing, having a well-designed 
            landing page can be the key to success. At MG Media, we 
            specialize in creating responsive and good copy landing 
            pages that can automatically generate leads and sales 
            for your business. 
        </p>

        <p>
            Our team of experts has years of experience building 
            landing pages that are designed to convert and lower
            your cost per customer acquisition. 
        </p>
        <p>
            We work with you to understand your business goals and
            create customized landing pages that are tailored to your specific needs. 
        </p>
        <p>
            With our landing page services, you can be confident that you’re 
            getting high-quality leads that will convert into paying customers.
        </p>
    </div>
    <Image className="desktop_img service_img" src='/landing_page.jpg' height={400} width={400} alt='pictures of multiple landing pages' />
   </section>
    
  )
}

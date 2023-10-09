import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <section className="service_hero">
    <div className="service_txt">
        <h1>FUNNELS:</h1>
        <Image className="mobile_img service_img" src='/funnels.jpg' height={400} width={400} alt='picture of a sales funnel' />
        <p>
            We believe you are only one funnel away from achieving 
            your dream results with your business. With our Funnels 
            service, we can help you build a high-converting funnel 
            hat will lead your prospects to take the desired action, 
            whether it is purchasing a product, subscribing to your 
            service, or filling out a lead form.
        </p>

        <p>
            Our team has already built 6-figure funnel strategies 
            that have put a lot of money in our clients’ pockets. 
            So, are you ready to be our next success story? Let us 
            help you take your business to the next level with 
            our Funnels service. 
        </p>
      
    </div>
    <Image className="desktop_img service_img" src='/funnels.jpg' height={400} width={400} alt='picture of a sales funnel' />
   </section>
    

  )
}

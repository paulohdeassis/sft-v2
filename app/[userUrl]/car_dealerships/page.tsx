import Image from 'next/image'
import React from 'react'


export default function page() {
  return (
   <>
        <section className="niche_hero">
        <div  className="niche_txt">
            <h1>Car Dealerships</h1>
          < Image className='niche_img mobile_img' src='/car.png' alt='a picture of multiple cars' height={500} width={600} />
            <p> 
                Drawing in potential customers and maintaining relationships 
                with current ones, overseeing staff and arranging appointments, 
                and staying informed about the latest advancements in the automotive 
                industry can present daily challenges for car dealership owners.
            </p>
            <p>
                MG Media is here to assist by crafting a customized marketing 
                plan that hones in on your desired clientele, generates prospects 
                using efficient sales channels and captivating web pages, and 
                executes compelling advertising campaigns on platforms like Facebook, 
                Google, and YouTube to boost visits to your website. Additionally, 
                we’re equipped to enhance your Google My Business profile, streamlining 
                the process for prospective buyers to discover your dealership online.
            </p>
        </div>
        < Image className='niche_img desktop_img' src='/car.png' alt='a picture of multiple cars' height={500} width={600} />
    </section>

    <section className="success_container">

        <div className="success_txt">
            <h2>OUR SUCCESS STORIES</h2>
            <p>
                Ready to attract more clients and grow your business? 
                Contact MG Media today and discover how our lead 
                generation, funnel and landing page services, along
                with our expert Facebook, Google, and YouTube ad management,
                can help you overcome your daily struggles and achieve your goals.

            </p>
        </div>
            <div className="success_card_container">
                <div className="success_card fix_size">
                <Image className='card_img' src="/drive_palace.png" alt="drive palace logo" height={100} width={100} />
                    <h3>DRIVE PALACE</h3>
                    <p>Luxury Car Dealership</p>

                    <p>
                        We helped Drive Palace increase their leads by 40% and 
                        their sales by <span>25% through our targeted PPC campaigns.</span>
                    </p>
                </div>
                    <div className="success_card">
                    <Image className='card_img' src="/auto-motion.png" alt="auto motion logo" height={100} width={100} />
                        <h3>AUTO MOTION</h3>
                        <p>Used Car Dealership</p>
        
                        <p>
                            Our PPC services helped Auto Motion achieve a 20% increase in 
                            website traffic and a <span>15% increase in sales in just 3 months.</span>
                        </p>
        
                    </div>
                    <div className="success_card">
                        <Image className='card_img' src="/speedy-weels.png" alt="speedy wheels logo" height={100} width={100} />
                        <h3>SPEEDY WHEELS</h3>
                        <p>Sports Car Dealership</p>
        
                        <p>
                            We generated over 500 qualified leads and helped Speedy Wheels 
                            increase their revenue by <span>30% through our comprehensive PPC strategy.</span>
                        </p>
        
                    </div>
                    <div className="success_card">
                    <Image className='card_img' src="/car-hub.png" alt="car hub logo" height={100} width={100} />
                        <h3>CAR HUB</h3>
                        <p>Multi-Brand Car Dealership</p>
        
                        <p>
                            Our data-driven PPC campaigns helped Car Hub achieve a 10% 
                            increase in conversion rates and a <span>25% decrease in cost per click.</span>
                        </p>
        
                    </div>

                    <div className="success_card">
                    <Image className='card_img' src="/green-wheels.png" alt="green wheels logo" height={100} width={100} />  
                        <h3>GREEN WHEELS</h3>
                        <p>Eco-Friendly Car Dealership</p>
            
                        <p>
                        We helped Green Wheels reach a wider audience and increase their sales
                        by <span>40% through</span> our tailored PPC campaigns that
                        highlighted their unique selling points.
                        </p>
            
                    </div>
                    <div className="success_card">
                    <Image className='card_img' src="/auto-imporium.png" alt="auto imporium logo" height={100} width={100} />  
                        <h3>AUTO IMPORIUM</h3>
                        <p>Car Dealership</p>
            
                        <p>
                        We successfully attained a <span>25% reduction in cost per lead,</span> 
                        our tailored PPC campaigns that highlighted their unique selling points.
                        </p>
            
                    </div>
            </div>
    </section>
    </>
  )
}

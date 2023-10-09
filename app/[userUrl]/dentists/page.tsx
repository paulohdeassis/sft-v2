import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <>
        <section className="niche_hero">
    <div className="niche_txt">
        <h1>DENTISTS</h1>
        < Image className='niche_img mobile_img' src='/dentist.png' alt='image of a woman gettin dental treatment' height={500} width={600} />
        <p> 
            MG Media specializes in personalized marketing solutions
             tailored specifically for dentists. We comprehend the 
             unique challenges you encounter in attracting patients, 
             managing appointments, and staying up-to-date with 
             the latest advancements in dental care.  
        </p>
        <p>
            Our customized strategies captivate your target audience, 
            generating high-quality leads through effective funnels 
            and engaging landing pages. Join forces with us to unlock 
            the full potential of your practice, leveraging our 
            industry expertise and proven strategies.
        </p>
    </div>
    < Image className='niche_img desktop_img' src='/dentist.png' alt='image of a woman gettin dental treatment' height={500} width={600} />
   </section>

   <section className="success_container">

    <div className="success_txt">
        <h2>OUR SUCCESS STORIES</h2>
        <p>
            Ready to attract more clients and grow your business? 
            Contact MG Media today and discover how our lead generation, 
            funnel and landing page services, along with our expert 
            Facebook, Google, and YouTube ad management, can help 
            you overcome your daily struggles and achieve your goals.
        </p>
    </div>
        <div className="success_card_container">
            <div className="success_card">
            <Image className='card_img rounded-full' src="/dr_msudur.png" alt="dr msudur logo" height={100} width={100} />
                <h3>DR MD MASUDUR RAHMAN</h3>
                <p>Prosthodontist</p>

                <p>
                    our specialized campaigns secured for him
                    <span> more than one million impressions </span>
                    in 5 months
                </p>
            </div>
                <div className="success_card">
                <Image className='card_img' src="/multident.png" alt="multident logo" height={100} width={100} />
                    <h3>MULTIDENT</h3>
                    <p>Dental Clinic</p>
    
                    <p>
                        In just 2 weeks of working together, 
                        <span> we managed to secure more signed
                            appointments through ads than were 
                            achieved in the entire previous year
                        </span>
                    </p>
    
                </div>
          
                
        
        </div>

   </section>

    </>
  )
}

/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <> 
    <section className="niche_hero">
    <div  className="niche_txt">
        <h1>OTHERS</h1>
        < Image className='niche_img mobile_img' src='/others.png' alt='picture of a man looking at a data dashboard on a tablet' height={500} width={600} />
        <p> 
            At MG Media, our accomplished team thrives in achieving remarkable results 
            across various niches. Industries frequently grapple with challenges in 
            attracting clients, managing resources, and staying current with advancements. 
            
        </p>
        <p>
            Our custom marketing strategies focus on your ideal audience, generating leads 
            through efficient funnels and impactful ads on platforms like Facebook, Google,
            and YouTube. We also enhance your online presence, ensuring easy access for 
            potential clients seeking your services.
        </p>
    </div>
    < Image className='niche_img desktop_img' src='/others.png' alt='picture of a man looking at a data dashboard on a tablet' height={500} width={600} />
   </section>

   <section className="success_container">

    <div className="success_txt">
        <h2>OUR SUCCESS STORIES</h2>
        <p>
            Are you eager to expand your client base and enhance your
            business? Reach out to MG Media now. Explore how our lead
            generation, funnel and landing page services, and adept 
            Facebook, Google, and YouTube ad management can empower 
            you to conquer challenges and realize your aspirations.

        </p>
    </div>
        <div className="success_card_container">
            <div className="success_card">
            <Image className='card_img' src="/armery-house.png" alt="armery house logo" height={100} width={100} />
                <h3>AMERY HOUSE</h3>
                <p>Hotel</p>

                <p>
                    We achieved a remarkable <span> tenfold increase in direct 
                    revenue within just 12 months, soaring from 3% 
                    to an impressive 30%. </span>This notable accomplishment 
                    showcases our commitment to delivering exceptional results for the client.
                </p>
            </div>
                <div className="success_card">
                <Image className='card_img' src="/zbx.png" alt="zbx  logo" height={100} width={100} />
                    <h3>ZBX</h3>
                    <p>Enterprise Crypto Bank</p>
    
                    <p>
                        We generated an impressive tally of <span>72 new B2B leads within a 
                        span of 4 months, achieving a CPA of $40.</span>
                        This outcome reflects our dedication to delivering effective results for the client.
                    </p>
    
                </div>
                <div className="success_card">
                <Image className='card_img' src="/bowld.png" alt="zbx bowl'd logo" height={100} width={100} />
                    <h3>BOWL'D</h3>
                    <p>Restaurant, Bar & Lounge</p>
    
                    <p>
                        After a 3-month advertising campaign, 
                        user engagement on the website and social
                        media pages <span>increased by over 10-fold,</span>
                        and the social following doubled within the same period.
                    </p>
    
                </div>
                <div className="success_card">
                <Image className='card_img' src="billionaire-tomorrow-.png" alt="billionaire tomorrow logo" height={100} width={100} />
                    <h3>BILLIONAIRE TOMORROW</h3>
                    <p>High End Publication.</p>
    
                    <p>
                        Our amazing strategies were able to achieve  an exceptional
                        <span>tenfold increase in viewers and readers within a span of six months.</span>
                    </p>
    
                </div>

                <div className="success_card">
                <Image className='card_img' src="motor-hub.png" alt="motor hub logo" height={100} width={100} />
                    <h3>MOTOR HUB</h3>
                    <p>Caravans, Trailers, Cabins & Mini houses.</p>
        
                    <p>
                        After nearly a year of advertising efforts and managing their social pages, 
                        user engagement on both the website and social media 
                        pages experienced an impressive surge,
                       by <span>increasing by over five-fold.</span>
                    </p>
        
                </div>
        
        </div>
            
        

   </section>
    
    
    </>
  )
}

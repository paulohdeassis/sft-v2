import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <>
    <section className="niche_hero">
    <div className="niche_txt">
        <h1>REAL ESTATE AGENTS</h1>
        < Image className='niche_img mobile_img' src='/reals-state.png' alt='a picture of a woman getting the keys for a house ' height={500} width={600} />
        <p> 
            Generating leads and finding new clients, navigating the 
            competitive real estate market, and closing deals and 
            ensuring a smooth transaction for clients can be daily 
            struggles for a real estate agent. Mg Media can help by 
            providing a tailored marketing strategy that targets 
            your ideal audience, generates leads through effective 
            funnels and landing pages, and runs effective Facebook, Google, 
            and YouTube ads to drive traffic to your website. 
        <p>
            We can also help you optimize your Google My Business 
            profile to make it easier for potential clients to find you online.
        </p>
        </p>
    </div>
    < Image className='niche_img desktop_img' src='/reals-state.png' alt='a picture of a woman getting the keys for a house ' height={500} width={600} />
   </section>

   <section className="success_container">

    <div className="success_txt">
        <h2>OUR SUCCESS STORIES</h2>
        <p>
            Looking to stand out in the competitive world of real estate 
            and grow your business? Contact MG Media today and find out how 
            our lead generation, funnel and landing page services, along 
            with our expert Facebook, Google, and YouTube ad management, 
            can help you generate more leads, increase sales and take 
            your business to the next level.
        </p>
    </div>
        <div className="success_card_container">
            <div className="success_card">
            <Image className='card_img' src="/prestige-realtyequip.png" alt="prestige realty logo" height={100} width={100} />
                <h3>PRESTIGE REALTY</h3>
                <p>Luxury Real Estate Agency</p>

                <p>
                    Our PPC campaigns generated over 100 qualified leads a
                    nd helped Prestige Realty increase their sales by <span> 20% in just 3 months.</span>
                </p>
            </div>
                <div className="success_card">
                <Image className='card_img' src="/urban-homes.png" alt="urban homes logo" height={100} width={100} />
                    <h3>URBAN HOMES</h3>
                    <p>Residential Real Estate Agency</p>
    
                    <p>
                        We helped Urban Homes achieve a <span> 25% increase </span>in website
                         traffic and a 15% increase in sales through our targeted PPC campaigns.
                    </p>
    
                </div>
                <div className="success_card">
                <Image className='card_img' src="/harmony-real.png" alt="harmony real estate logo" height={100} width={100} />
                
                    <h3>HARMONY REAL ESTATE</h3>
                    <p>New Construction Real Estate Agency</p>
    
                    <p>
                        Our data-driven PPC campaigns helped Harmony Real Estate achieve a
                         <span> 10% increase in conversion </span> rates and a 30% decrease in cost per click.
                    </p>
    
                </div>
                <div className="success_card">
                 <Image className='card_img' src="/globalwithchris.png" alt="A picture of Chris, he is a middle age white man with brown hair" height={100} width={100} />
                    <h3>GLOBALWITHCHRIS</h3>
                    <p>International Real Estate Agent</p>
    
                    <p>
                        We helped Christian reach a wider audience and increase his sales by
                         <span> 35% through </span> our comprehensive PPC strategy that targeted his key markets.
                    </p>
    
                </div>

                <div className="success_card">
                <Image className='card_img' src="/limaInvest.png" alt="A picture of Lima, he is a middle age white man with brown hair" height={100} width={100} />
                    <h3>LIMAINVESTE</h3>
                    <p>Brazilian Real Estate Agent</p>
        
                    <p>
                        Within only 4 months at the agency he has already sold more than
                         <span> USD 3 MI worth </span> apartments
                    </p>
        
                </div>

                <div className="success_card">
                <Image className='card_img' src="/harcouts.png" alt="harcouts logo" height={100} width={100} />
                    <h3>HARCOURTS</h3>
                    <p>Real Estate Agency</p>
        
                    <p>
                        After almost 2 years of managing their social pages, user 
                        engagement on both the website and social media pages 
                        experienced an impressive surge, increasing by
                        <span> over three-fold.</span>
                    </p>
        
                </div>
        </div>
   </section>

    </>
  )
}

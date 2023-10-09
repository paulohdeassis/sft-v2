import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <>
    <section className="niche_hero">
        <div className="niche_txt">
            <h1>INSURANCE BROKERS</h1>
            < Image className='niche_img mobile_img' src='/isurance.png' alt='a picture of a man signing a contract' height={500} width={600} />
            <p> 
                Generating leads and finding new clients, keeping
                up with changes in the insurance industry, and 
                balancing client needs with regulatory compliance 
                can be daily struggles for an insurance broker.
            </p>
            <p>
                Mg Media can help by providing a tailored marketing 
                strategy that targets your ideal audience, generates 
                leads through effective funnels and landing pages, 
                and runs effective Facebook, Google, and YouTube ads 
                to drive traffic to your website. We can also help 
                you optimize your Google My Business profile to make
                it easier for potential clients to find you online.
            </p>
        </div>
        < Image className='niche_img desktop_img' src='/insurance.png' alt='a picture of a man signing a contract' height={500} width={600} />
    </section>

    <section className="success_container">

        <div className="success_txt">
            <h2>OUR SUCCESS STORIES</h2>
            <p>
                Ready to attract more clients and grow your business? 
                Contact MG Media today and discover how our lead generation,
                funnel and landing page services, along with our expert Facebook,
                Google, and YouTube ad management, can help you overcome your 
                daily struggles and achieve your goals.
            </p>
        </div>
            <div className="success_card_container">
                <div className="success_card">
                <Image className='card_img' src="/COASTAL-INSURANCE.png" alt="Constal insurance logo" height={100} width={100} />
                    <h3>COASTAL INSURANCE</h3>
                    <p>Home and Auto Insurance Brokerage</p>

                    <p>
                        Our PPC campaigns generated over 500 qualified 
                        leads and helped Coastal Insurance increase their 
                        sales by <span>30% in just 4 months.</span>
                    </p>
                </div>
                    <div className="success_card">
                    <Image className='card_img' src="/PROTECT-PLUS.png" alt="protect plus logo" height={100} width={100} />
                        <h3>PROTECT PLUS</h3>
                        <p>Life Insurance Brokerage</p>
        
                        <p>
                            We helped Protect Plus achieve a <span>20% increase</span>
                            in website traffic and a 15% increase in sales through our 
                            targeted PPC campaigns that focused on their unique selling points.
                        </p>
        
                    </div>
                    <div className="success_card">
                    <Image className='card_img' src="/CLEAR-SKY.png" alt="clean sky logo" height={100} width={100} />
                        <h3>CLEAR SKY INSURANCE</h3>
                        <p>Commercial Insurance Brokerage</p>
        
                        <p>
                            Our data-driven PPC campaigns helped Clear Sky Insurance achieve a
                            <span> 10% increase </span> in conversion rates and a 20% decrease 
                            in cost per click.
                        </p>
        
                    </div>
                    <div className="success_card">
                    <Image className='card_img' src="/Patria.png" alt="patria logo" height={100} width={100} />
                        <h3>PATRIA BR</h3>
                        <p>Life & Health Insurance Brokerage</p>
        
                        <p>
                            They hired us when they had only 2 employees. Today they have over 40, 
                            <span> making over USD 50k a month.</span>
                        </p>
        
                    </div>
                    <div className="success_card">
                    <Image className='card_img' src="/GLOBAL-HEALTH.png" alt="global healt logo" height={100} width={100} />
                        <h3>GLOBAL HEALTH INSURANCE</h3>
                        <p>International Health Insurance Brokerage</p>
            
                        <p>
                            Our company drove remarkable success for Global Health Insurance 
                            by boosting customer engagement through data-driven strategies. 
                            Leveraging our expertise,
                            <span> we achieved a 40% increase in online policy sign-ups.</span>
                        </p>
                    </div>
            </div>
    </section>
    </>
  )
}

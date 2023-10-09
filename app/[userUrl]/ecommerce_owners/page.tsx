import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <>
        <section className="niche_hero">
        <div className="niche_txt">
            <h1>ECOMMERCE OWNERS</h1>
            < Image className='niche_img mobile_img' src='/ecommerce.png' alt='a picture of a woman holding a box' height={500} width={600} />
            <p> 
                Driving traffic to your website, managing inventory 
                and order fulfillment, and staying up-to-date with the 
                latest marketing and e-commerce trends can be daily 
                struggles for an e-commerce owner. 
            </p>
            <p>
                Mg Media can help by providing a tailored marketing 
                strategy that targets your ideal audience, generates 
                leads through effective funnels and landing pages, 
                and runs effective Facebook, Google, and YouTube ads 
                to drive traffic to your website. We can also help you 
                optimize your Google My Business profile to make it 
                easier for potential clients to find you online.
            </p>
        </div>
        < Image className='niche_img desktop_img' src='/ecommerce.png' alt='a picture of a woman holding a box' height={500} width={600} />
    </section>

    <section className="success_container">

        <div className="success_txt">
            <h2>OUR SUCCESS STORIES</h2>
            <p>
                Ready to take your online store to the next level and 
                increase sales? Contact MG Media today and find out 
                how our lead generation, funnel and landing page services, 
                along with our expert Facebook, Google, and YouTube ad 
                management, can help you generate more traffic, boost 
                conversions, and grow your business.
            </p>
        </div>
            <div className="success_card_container">
                <div className="success_card">
                    <Image className='card_img' src="/hemithea.png" alt="hemithea logo" height={100} width={100} />
                        <h3>HEMITHEA</h3>
                        <p>Ecommerce</p>

                        <p>
                            <span>We’ve increased the ROAS of the client by 300%</span>
                            with our creative performance strategy & ecommerce tactics.
                        </p>
                </div>
                    <div className="success_card">
                    <Image className='card_img' src="/ina-essentials.png" alt="ina essentials logo" height={100} width={100} />
                        <h3>INA ESSENTIALS</h3>
                        <p>Cosmetics Ecommerce</p>
        
                        <p>
                            We achieved remarkable results in just 18 months,
                            <span>increasing the revenue from 5M to 16M per year.</span>
                        </p>
        
                    </div>
                    <div className="success_card">
                    <Image className='card_img' src="/jenna-clifford.png" alt="jenna clifford logo" height={100} width={100} />
                        <h3>JENNA CLIFFORD</h3>
                        <p>Jewellery Ecommerce</p>
        
                        <p>
                            Following our 3-month advertising campaign, 
                            we achieved an outstanding increase of
                            <span>over five-fold in user engagement</span>
                            on both the website and social media pages.
                        </p>
        
                    </div>
                    <div className="success_card">
                    <Image className='card_img' src="/o-so-simple.png" alt="o so simple cosmetics logo" height={100} width={100} />
                        <h3>SO SIMPLE COSMETICS</h3>
                        <p>Natural Cosmetics Ecommerce</p>
        
                        <p>
                            Through ingenious and innovative strategies, 
                            we propelled our client’s business to an exceptional
                            <span>15X growth.</span>
                        </p>
        
                    </div>
            
                    <div className="success_card">
                        <Image className='card_img' src="/USG-ME.png" alt="USG ME logo" height={100} width={100} />
                        <h3>USG ME</h3>
                        <p>Construction Materials Ecommerce</p>
        
                        <p>
                            We successfully                      
                            <span> elevated the marketing conversion rates by over 50%, </span>
                            achieving remarkable results for our client. 
                        </p>
        
                    </div>
            
                    <div className="success_card">
                        <Image className='card_img' src="/vibes_fashion.png" alt="vibes fashion logo" height={100} width={100} />
                        <h3>VIBES FASHION</h3>
                        <p>Ecommerce</p>
        
                        <p>
                            In the inaugural month, we accomplished a
                            <span>quadruple growth in revenue and achieved an impressive ROI of 9.5,</span>
                            showcasing our impactful results for the client.
                        </p>
        
                    </div>
                    <div className="success_card">
                        <Image className='card_img' src="/311-collectibles.png" alt="311 collectibles logo" height={100} width={100} />
                        <h3>311 COLLECTIBLES</h3>
                        <p>Collectible Goods Ecommerce</p>
        
                        <p>
                            In the initial month, our efforts yielded 
                            <span>a sixfold increase in revenue and an impressive ROI of 7.3,</span>
                            exemplifying our significant achievements for the client.
                        </p>
                    </div>
            
                    <div className="success_card">
                    <Image className='card_img' src="/veena.png" alt="veena logo" height={100} width={100} />
                        <h3>VEENA</h3>
                        <p>Ecommerce</p>
        
                        <p>
                            Within the initial month, we orchestrated an impressive
                            <span>fourfold surge in revenue, coupled with a commendable ROI of 8.7.</span>
                        </p>
                    </div>
            
                    
                    <div className="success_card">
                    <Image className='card_img' src="/ATHLETIC-BEE.png" alt="athletic bee logo" height={100} width={100} />
                        <h3>ATHLETIC BEE</h3>
                        <p>Fitness Clothing Ecommerce</p>
        
                        <p>
                            Within the initial month, we propelled
                            <span> revenue growth by ten times, delivering a solid ROI of 8.2.</span>
                            These concrete outcomes underline our direct impact and dedication 
                            to achieving significant results for the client.
                        </p>
                    </div>
                    <div className="success_card">
                    <Image className='card_img' src="/after-surgery.png" alt="after surgery logo" height={100} width={100} />
                        <h3>AFTER SURGERY</h3>
                        <p>Ecommerce</p>
        
                        <p>
                            In the first month, our combined efforts led to an impressive
                            <span>sixfold rise in revenue, accompanied by a robust ROI of 7.8.</span>
                            These quantifiable achievements highlight our effectiveness and 
                            commitment to driving meaningful results for the client.
                            </p>
                    </div>
            </div>
        </section>
    </>
  )
}

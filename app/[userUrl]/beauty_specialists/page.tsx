import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <>
        <section className="niche_hero">
            <div className="niche_txt">
                <h1>BEAUTY SPECIALISTS</h1>
                < Image className='niche_img mobile_img' src='/cosmetic-procedures.png' alt='image of a woman geting a injection on her face' height={500} width={600} />
                <p> 
                    MG Media specializes in customized marketing solutions 
                    for beauty professionals and plastic surgeons. We understand 
                    the challenges you face in attracting patients, managing 
                    appointments, and staying updated on cosmetic advancements.
                </p>
                <p>
                    Our tailored strategies captivate your target audience, 
                    generating quality leads through effective funnels and 
                    compelling landing pages. Partner with us to unlock your 
                    practice’s full potential with our industry expertise 
                    and proven strategies.
                </p>
            </div>
            < Image className='niche_img desktop_img' src='/cosmetic-procedures.png' alt='image of a woman geting a injection on her face' height={500} width={600} />
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
                        <Image className='card_img' src="/fernanda_junqueira.webp" alt="picture of fernanda junqueira" height={100} width={100} />
                        <h3>FERNANDA JUNQUEIRA</h3>
                        <p>Dermatologist</p>

                        <p>
                            We scaled her revenue from 
                            <span> USD 7k to 20k a month</span>
                        </p>
                    </div>
                        <div className="success_card">
                            <Image className='card_img' src="/DR-CHIRLI-VECHIequip.png" alt="picture of Chirli Vechi" height={100} width={100} />
                            <h3>DR CHIRLI VECHI</h3>
                            <p>Aesthetician</p>
            
                            <p>
                                With our help she opened 3 clinics and is currently 
                                making from<span> USD 20k to 60k a month </span>
                            </p>
            
                        </div>
                        <div className="success_card fix_size">
                            <Image className='card_img' src="/wink-logo.webp" alt="wink logo" height={100} width={100} />
                            <h3>WIÑK</h3>
                            <p>Brow design franchise</p>
            
                            <p>
                                We brought this Portuguese franchise to Latin America 
                                and today they already have more than <span> 20 units </span>
                                around Brazil
                            </p>
                        </div>

                        <div className="success_card">
                            <Image className='card_img' src="/spa-sorocaba.webp" alt="spa sorocaba logo" height={100} width={100} />
                            <h3>SPA SOROCABA</h3>
                            <p>First Brazilian medical spa</p>
            
                            <p>
                                With our assistance they’re making from <span>USD 175k to 200k </span>
                                a year in sales
                            </p>            
                        </div>
                </div>
            </section>
  </>

  )
}

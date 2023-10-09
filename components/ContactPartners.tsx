import React from 'react'
import Image from 'next/image'

export default function ContactPartners() {
  return (
    <section className="partners">
        <h2>Our Partners</h2>

        <div className="partners_grid">
            <div className="partner_card">
          
                <Image src='/24-social.png'  className='card_img' alt='24 Social logo' width={300} height={300} /> 
                <h3>24 Hours Social</h3>

                <p><b>Country:</b> Uruguay/USA</p>
                <p><b>Niches:</b>Dentists, Plastic Surgery</p>
            </div>
            <div className="partner_card">
                <Image src='/ad--virals.png' className='card_img' alt='ad virals logo' width={300} height={300} /> 
                <h3>Ad Virals</h3>

                <p><b>Country:</b>Romania</p>
                <p><b>Niches:</b>Plastic Surgery</p>
            </div>
            <div className="partner_card">
            <Image src='/ANCHOR.png' className='card_img' alt='anchor media logo logo' width={300} height={300} /> 
                <h3>Anchor Media</h3>

                <p><b>Country:</b>Bulgaria</p>
                <p><b>Niches:</b>Dentists</p>
            </div>
            <div className="partner_card">
            <Image src='/detour.png' className='card_img' alt='detour logo' width={300} height={300} /> 
                <h3>Detour</h3>
                <p><b>Country:</b>:Turkey/USA</p>
                <p><b>Niches:</b>Dentists, Real State</p>
            </div>
            <div className="partner_card">
            <Image src='/foxtail.png'  className='card_img' alt='foxtail logo' width={300} height={300} /> 
                <h3>FoxTail Limited</h3>
                <p><b>Country:</b>:Bangladesh</p>
                <p><b>Niches:</b>Dentists</p>
            </div>
            <div className="partner_card">
            <Image src='/growth-gurus.png' className='card_img' alt='growth gurus logo' width={300} height={300} /> 
                <h3>Growth Gurus</h3>
                <p><b>Country:</b>Malta</p>
                <p><b>Niches:</b>Insurance Brokers</p>
            </div>
            <div className="partner_card">
            <Image src='/interprised.png' className='card_img'  alt='interprised logo' width={300} height={300} /> 
                <h3>Interprised</h3>
                <p><b>Country:</b>Slovakia</p>
                <p><b>Niches:</b>Real State </p>
            </div>
            <div className="partner_card">
            <Image src='/rewize.png'  className='card_img' alt='rewize logo' width={300} height={300} /> 
                <h3>Rewize</h3>
                <p><b>Country:</b>Greece</p>
                <p><b>Niches:</b>Cosmetic Procedures</p>
            </div>
            <div className="partner_card">
            <Image src='/siob_media.png' className='card_img' alt='siob media logo' width={300} height={300} /> 
                <h3>SIOB Media</h3>
                <p><b>Country:</b>South Africa</p>
                <p><b>Niches:</b>Cosmetic Procedures, Plastic Surgery</p>
            </div>
            <div className="partner_card">
            <Image src='/tales_of_aceventures.png' className='card_img' alt='tales of ace ventures logo' width={300} height={300} /> 
                <h3>Tale of Ace Ventures</h3>
                <p><b>Country:</b>India</p>
                <p><b>Niches:</b>Real State</p>
            </div>
            <div className="partner_card">
            <Image src='/clever-converters.png' className='card_img' alt='24 Social logo' width={200} height={200} /> 
                <h3>Clever Converters</h3>
                <p><b>Country:</b>Netherlands</p>
                <p><b>Niches:</b>eCommerce</p>
                
            </div>
        </div>
   </section>
  )
}

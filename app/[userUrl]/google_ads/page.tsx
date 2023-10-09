import Image from 'next/image'
import React from 'react'


export default function page() {
  return (
    <section className="service_hero">
    <div className="service_txt">
        <h1>GOOGLE ADS:</h1>
        <Image className="mobile_img service_img" src='/google_ads.jpg' height={400} width={400} alt='picture of google ads dashboard' />
        <p>
            When it comes to digital advertising, being at the top 
            of Google Searches can be the key to success for any business.
        </p>

        <p>
            With our Google Ads services, we can help you reach 
            your target audience faster and get incredible results.  
        </p>
        <p>
            Our team has years of experience creating effective ad 
            campaigns, and we’re dedicated to helping our clients 
            achieve their business goals. We understand that the 
            higher you appear in search results, the more clicks 
            and conversions you’re likely to receive.
        </p>
        <p>
            That’s why we work tirelessly to ensure that your business 
            is at the top of the search engine results page. With our 
            Google Ads services, we can help you be found before your 
            competitor, no matter the size of your business.
        </p>
    </div>
    <Image className="desktop_img service_img" src='/google_ads.jpg' height={400} width={400} alt='picture of google ads dashboard' />
   </section>
  )
}

import React from 'react'
import Image from 'next/image'

export default function TeamHero() {
  return (
    <section className="team_hero">
    <div className="team_txt">
        <h1>Our Team</h1>
        <Image className='mobile_img' src='/new-team-pic.png' alt='three people looking at a tablet and chating' width={500} height={500} />

        <p>
            Welcome to the Creative Chain at MG Media. 
            Our team of experienced marketing professionals is 
            committed to helping you achieve your business goals. 
            From lead generation to expert social media management,
            we deliver results-driven solutions and personalized 
            service. Let us be your catalyst for success.
        </p>
        <p>
            At MG Media, we pride ourselves on delivering exceptional 
            results and providing the attention and support you deserve. 
            Our dedicated team is here to take your business to the next level. 
            Meet our experts and discover how we can help you achieve your objectives. 
            Contact us today and let’s embark on this journey together.
        </p>

    </div>
    <Image  className='desktop_img hero_img' src='/new-team-pic.png' alt='three people looking at a tablet and chating' width={500} height={500} />
   </section>
  )
}

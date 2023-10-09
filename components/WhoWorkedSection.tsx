import React from 'react'
import Image from 'next/image'
export default function WhoWorkedSection() {
  return (
    <section className="who_worked">
        <h2>Who We've Worked With:</h2>
        <h4>Our agency has worked with a variety of businesses, including:</h4>
        <Image  src='/perfis.webp' alt='image of multiple instagram profiles'   className='who-worked-img' height={1200} width={1200}/>
   </section>
  )
}

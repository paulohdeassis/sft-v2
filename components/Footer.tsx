import React from 'react'
import { BiLogoInstagram } from 'react-icons/bi'
import { BiLogoWhatsapp } from 'react-icons/bi' 
import { RxEnvelopeClosed } from 'react-icons/rx'

interface Props {
    email: string,
    whatsapp: string,
    instagram: string
}


export default function Footer({email, whatsapp, instagram}: Props) {
  return (
    <footer id='footer'>
    <div className="footer-background ">
        <div className="grid grid-cols-1 place-content-center text-center p-8 text-white">
            <h3 className='font-bold my-4 text-3.5xl'>CONTACT US</h3>

            <div className="sm:w-full lg:w-2/4 my-4 justify-self-center">
                <p><span className='font-black'>MG Media</span> is the right place to find professionals motivated to 
                    expand your work and business through digital strategies and 
                    increase your profits starting today. </p>
                <p className='my-2'>Want to hear more about our managed and <span className='font-black'>‘done for you’</span> digital marketing services? </p>
                <p className='font-black'><span>Hit the button below to speak to one of our specialists:</span></p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 place-content-center justify-between mt-8 justify-self-center gap-5">
            <button type='button'>
                        <a  className='bg-white sm:w-full md:w-fit  flex justify-center
                        align-middle  py-4 px-6 rounded-full hover:scale-105' 
                        href={`https://api.whatsapp.com/send?phone=${whatsapp}text=Hi`}>
                               <BiLogoWhatsapp color='#25D366' size={28} />
                        <p  className='text-[#25D366] text-xl font-semibold pl-4'>WHATSAPP</p>
                        </a>
                </button>
                <button type='button'>
                    <a href={`mailto:${email}`} className='bg-transparent border-2 w-full border-white flex justify-center
                        align-middle  py-4 px-6 rounded-full hover:scale-105'>
                                <RxEnvelopeClosed  color='white' size={28}  />
                        <p  className='text-white text-xl font-semibold pl-4'>EMAIL</p>
                    </a>
                </button>
        
                <button type='button'>
                    <a href={instagram}  className='instagram-gradient  w-full md:w-fit  flex justify-center text-center
                        align-middle  py-4 px-6 rounded-full hover:scale-105'>
                            <BiLogoInstagram  size={28}  />
                        <p  className='text-white text-xl font-semibold pl-4'>INSTAGRAM</p>
                    </a>
                </button>
                
            </div>

        </div> 

    </div>
   
    <div className="bg-dark-grey text-center p-8 text-white ">
        <p>2023 © <span className='font-black text-lg'>MG Media.</span> All rights reserved | Privacy Policy</p>
    </div>
</footer>
  )
}

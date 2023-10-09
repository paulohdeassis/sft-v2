"use client"
import React, { useContext } from "react"
import { Montserrat } from 'next/font/google'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import userContext from "@/contexts/userContext"
import { useFetch } from '@/hooks/useFecth'






const montserrat = Montserrat({ subsets: ['latin'] })
export default function UserLayout({children, params}: {children: React.ReactNode}) {
  const {userInfo} = useContext(userContext)
    return (
     
        <body>
          <Navbar baseUrl={userInfo?.MG_URL}/>
            {children}
          <Footer email={userInfo?.MG_Email} whatsapp={userInfo?.Phone} instagram={userInfo?.Instagram_URL}/>
        </body>
    )
  }
  
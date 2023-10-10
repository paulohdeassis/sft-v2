"use client"
import React, { useContext } from "react"
import { Montserrat } from 'next/font/google'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import userContext from "@/contexts/userContext"
import { useFetch } from '@/hooks/useFecth'
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"




const montserrat = Montserrat({ subsets: ['latin'] })
export default function UserLayout({children, params}: {children: React.ReactNode, params: Params}) {
  // @ts-ignore 
  const { userInfo , setUserInfo} = useContext(userContext)
  const {data} = useFetch(params.userUrl)
  setUserInfo(data?.data[0])
  console.log(data?.data[0])
    return (
     
        <body>
          <Navbar routeBase={params.userUrl}/>
            {children}
          <Footer email={userInfo?.MG_Email} whatsapp={userInfo?.Phone} instagram={userInfo?.Instagram_URL}/>
        </body>
    )
  }
  
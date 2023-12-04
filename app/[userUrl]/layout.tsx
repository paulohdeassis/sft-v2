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
  const userData = {
    Instagram_URL: data?.data[0].Instagram_URL,
    MG_Email: data?.data[0].MG_Email,
    MG_URL: data?.data[0].MG_URL,
    Name: data?.data[0].Name,
    Phone:  data?.data[0].Phone.replace('+','').split(" ").join(''),
  }
  setUserInfo(userData)
  console.log(userData)
    return (
     
        <body>
          <Navbar routeBase={params.userUrl}/>
            {children}
          <Footer email={userInfo?.MG_Email} whatsapp={userInfo?.Phone} instagram={userInfo?.Instagram_URL}/>
        </body>
    )
  }
  
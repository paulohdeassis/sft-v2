"use client"
import React from 'react'
import { useContext } from 'react'
import MainHero from '@/components/MainHero'
import NumbersSection from '@/components/NumbersSection'
import StepsSection from '@/components/StepsSection'
import PartnersSection from '@/components/PartnersSection'
import SocialProofSection from '@/components/SocialProofSection'
import WhoWorkedSection from '@/components/WhoWorkedSection'
import { useFetch } from '@/hooks/useFecth'
import userContext from '@/contexts/userContext'



export default function UserPage(context: any) {
  const { userInfo, setUserInfo} = useContext(userContext)
  const { params: { userUrl } } = context  
  const { data } = useFetch(userUrl)
  const userData = data?.data[0]
  
  setUserInfo(userData)
  return (
    <>
      <MainHero phoneNumber={userData?.Phone} />
      <PartnersSection />
      <NumbersSection/>
      <StepsSection />
      <SocialProofSection />
      <WhoWorkedSection />
    </>
  )
}

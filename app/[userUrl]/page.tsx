"use client"
import React from 'react'
import { useContext } from 'react'
import MainHero from '@/components/MainHero'
import NumbersSection from '@/components/NumbersSection'
import StepsSection from '@/components/StepsSection'
import PartnersSection from '@/components/PartnersSection'
import SocialProofSection from '@/components/SocialProofSection'
import WhoWorkedSection from '@/components/WhoWorkedSection'
import userContext from '@/contexts/userContext'



export default function UserPage() {
  // @ts-ignore 
  const { userInfo } = useContext(userContext)

  return (
    <>
      <MainHero phoneNumber={userInfo?.Phone} />
      <PartnersSection />
      <NumbersSection/>
      <StepsSection />
      <SocialProofSection />
      <WhoWorkedSection />
    </>
  )
}

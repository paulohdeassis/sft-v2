"use client"
import ContactSection from '@/components/ ContactSection'
import ContactPartners from '@/components/ContactPartners'
import MembersSection from '@/components/MembersSection'
import TeamHero from '@/components/TeamHero'
import userContext from '@/contexts/userContext'
import React, { useContext } from 'react'

export default function Page() {
  const { userInfo } = useContext(userContext)
  console.log(userInfo)
  return (
    <>
      <TeamHero/>
      <MembersSection userName={userInfo?.Name} />
      <ContactSection />
      <ContactPartners />
    </>
  )
}

"use client"
import './globals.css'
import 'dotenv/config'
import { Montserrat } from 'next/font/google'
import userContext from"@/contexts/userContext"
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })
const queryCLient = new QueryClient()


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [userInfo, setUserInfo] = useState('')
  
  return (
    <QueryClientProvider client={queryCLient}>
      {/* @ts-ignore  */}
       <userContext.Provider value={{userInfo, setUserInfo}}
        >
        <html>
        <body className={montserrat.className}>
          {children}
        </body>
      </html>
      </userContext.Provider>
    </QueryClientProvider>
  )
}

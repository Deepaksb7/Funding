"use client"
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

const dashboard = () => {
  const { data: session } = useSession()
    const router = useRouter()
  
    useEffect(() => {
      if(!session) {
          router.push("/login")
        }
    }, [session,router])
  return (
    <div>
      dashboard
    </div>
  )
}

export default dashboard

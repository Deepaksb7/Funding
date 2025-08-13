"use client"
import { SessionProvider } from "next-auth/react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function SessionWrapper({children}) {
  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  )
}

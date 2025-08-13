"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
     if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
     </>}

    return (
        <nav className='flex items-center bg-gradient-to-r from-[#1d3263]  to-[#344863] text-white justify-between p-4'>
            <div className="logo font-bold text-xl">NeedOfFunding!</div>
            {/* <ul className='flex gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
                <li>Sign up</li>
                <li>Login</li>
            </ul> */}
            <div>
                <Link href={"/login"}>
                <button className="xt-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 ">Login</button>
                </Link>
            </div>
        </nav>

    )
}

export default Navbar

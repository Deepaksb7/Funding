"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false)
    //  if(session) {
    // return <>
    //   Signed in as {session.user.email} <br/>
    //   <button onClick={() => signOut()}>Sign out</button>
    //  </>}

    return (
        <nav className='flex items-center bg-gradient-to-r from-[#1d3263]  to-[#344863] text-white justify-between p-3'>
            <div className="logo font-bold text-xl">
                <Link href={"/"}>
                <span>
                NeedOfFunding!
                </span>
                </Link>

                </div>
            {/* <ul className='flex gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
                <li>Sign up</li>
                <li>Login</li>
            </ul> */}
            <div className='relative flex justify-center items-center  md:block gap-4'>
                {session && <>
                    <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
                        setTimeout(() => {
                            setShowdropdown(false)
                        }, 100);
                    }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 inline-flex items-center text-center me-2" type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                            </li>
                            <li>
                                <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div></>
                }
                {session && <button className="xt-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 " onClick={() => { signOut() }} >Logout</button>}
                {!session &&
                    <Link href={"/login"}>
                        <button className="xt-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 " >Login</button>
                    </Link>
                }
            </div>
        </nav>

    )
}

export default Navbar

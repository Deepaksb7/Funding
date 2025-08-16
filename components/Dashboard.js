"use client"
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if (!session) {
            router.push("/login")
        }
    }, [session, router])

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className='container mx-auto py-5'>
            <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your dashboard</h1>
            <form className='max-w-2xl mx-auto'>

                <div className='my-2'>
                    <label htmlFor="name" className='mb-2 text-sm font-bold' >Name</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text"  placeholder='Enter Your Name' name='name' className='w-full placeholder-white mt-1 bg-slate-800 p-2 rounded-lg  text-gray-900 border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="email" className='mb-2 text-sm font-bold' >Email</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text"  placeholder='Enter Your Email' name='email' className='w-full mt-1 placeholder-white bg-slate-800 p-2 rounded-lg  text-gray-900 border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="Username" className='mb-2 text-sm font-bold' >Username</label> placeholder-white
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text"  placeholder='Enter Your Username' name='Username' className='w-full placeholder-white bg-slate-800 mt-1 p-2 rounded-lg  text-gray-900 border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="Profile picture" className='mb-2 text-sm font-bold' >Profile picture</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder='Profile picture' name='Profilepicture' className='w-full placeholder-white bg-slate-800 p-2 rounded-lg mt-1 text-gray-900 border  border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="Cover picture" className='mb-2 text-sm font-bold' >Cover picture</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder='Cover picture' name='Coverpicture' className='w-full p-2 placeholder-white bg-slate-800 mt-1 rounded-lg text-gray-900 border  border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="Razorpay Id" className='mb-2 text-sm font-bold' >Razorpay Id</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder='Razorpay Id' name='RazorpayId' className='w-full p-2 placeholder-white rounded-lg mt-1 bg-slate-800 text-gray-900 border  border-white' />
                </div>
                
                <div className='my-2'>
                    <label htmlFor="Razorpay Secret" className='mb-2 text-sm font-bold' >Razorpay Secret</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder='Razorpay Secret' name='RazorpaySecret' className='mt-1 placeholder-white bg-slate-800 w-full p-2 rounded-lg text-gray-900  border border-white' />
                </div>

                <div className='my-6'>
                    <button type='submit' className='w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Dashboard

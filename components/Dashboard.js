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
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder-white placeholder='Enter Your Name' name='name' className='w-full p-2 rounded-lg text-gray-900 border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="email" className='mb-2 text-sm font-bold' >Email</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder-white placeholder='Enter Your Name' name='name' className='w-full p-2 rounded-lg text-gray-900 border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="email" className='mb-2 text-sm font-bold' >Username</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder-white placeholder='Enter Your Username' name='name' className='w-full p-2 rounded-lg text-gray-900 border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="name" className='mb-2 text-sm font-bold' >Profile pic</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder='Profile Pic' name='name' className='w-full p-2 rounded-lg text-gray-900 border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="name" className='mb-2 text-sm font-bold' >Cover pic</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder='Cover Pic' name='name' className='w-full p-2 rounded-lg text-gray-900 border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="name" className='mb-2 text-sm font-bold' >Razorpay Id</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder-white placeholder='Razorpay Id' name='name' className='w-full p-2 rounded-lg text-gray-900 border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="name" className='mb-2 text-sm font-bold' >Razorpay Credientials</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder-white placeholder='Razorpay Credientials' name='name' className='w-full p-2 rounded-lg text-gray-900 border border-white' />
                </div>
                
                <div className='my-2'>
                    <label htmlFor="name" className='mb-2 text-sm font-bold' >Razorpay Secret</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" placeholder-white placeholder='Razorpay Secret' name='name' className='w-full p-2 rounded-lg text-gray-900 border border-white' />
                </div>

                <div className='my-6'>
                    <button type='submit' className='w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Dashboard

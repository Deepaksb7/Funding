"use client"
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { updateProfile, fetchuser } from '@/actions/useractions'

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (!session) {
            router.push("/login")
        } else {
            const getData = async () => {
                let u = await fetchuser(session.user.name)
                setform(u)
            }
            getData()
        }

    }, [session, router])

    // const getData = async () => {
    //     let u = await fetchuser(session.user.name)
    //     setform(u)
    // }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handlesubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        alert("Profile updated")
    }

    return (
        <div className='container mx-auto py-5 px-6'>
            <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your dashboard</h1>
            <form className='max-w-2xl mx-auto' action={handlesubmit}>

                <div className='my-2 '>
                    <label htmlFor="name" className='mb-2 text-sm font-bold' >Name</label>
                    <input value={form.name ? form.name : ""} onChange={handlechange} type="text" name='name' className='w-full placeholder-white mt-1 bg-slate-800 p-2 rounded-lg  text-white border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="email" className='mb-2 text-sm font-bold' >Email</label>
                    <input value={form.email ? form.email : ""} onChange={handlechange} type="text" name='email' className=' w-full mt-1 placeholder-white bg-slate-800 p-2 rounded-lg  text-white border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="username" className='mb-2 text-sm font-bold' >Username</label>
                    <input value={form.username ? form.username : ""} onChange={handlechange} type="text" name='username' className='w-full placeholder-white bg-slate-800 mt-1 p-2 rounded-lg  text-white border border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="profilepic" className='mb-2 text-sm font-bold' >Profile picture</label>
                    <input value={form.profilepic ? form.profilepic : ""} onChange={handlechange} type="text" name='profilepic' className='w-full placeholder-white bg-slate-800 p-2 rounded-lg mt-1 text-white border  border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="coverpic" className='mb-2 text-sm font-bold' >Cover picture</label>
                    <input value={form.coverpic ? form.coverpic : ""} onChange={handlechange} type="text" name='coverpic' className='w-full p-2 placeholder-white bg-slate-800 mt-1 rounded-lg text-white border  border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="razorpayid" className='mb-2 text-sm font-bold' >Razorpay Id</label>
                    <input value={form.razorpayid ? form.razorpayid : ""} onChange={handlechange} type="text" name='razorpayid' className='w-full p-2 placeholder-white rounded-lg mt-1 bg-slate-800 text-white border  border-white' />
                </div>

                <div className='my-2'>
                    <label htmlFor="razorpaysecret" className='mb-2 text-sm font-bold' >Razorpay Secret</label>
                    <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handlechange} type="text" name='razorpaysecret' className='mt-1 placeholder-white bg-slate-800 w-full p-2 rounded-lg text-white  border border-white' />
                </div>

                <div className='my-6'>
                    <button type='submit' className='w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Dashboard

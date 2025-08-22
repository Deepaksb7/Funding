"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchpayment, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { fetchuser } from '@/actions/useractions'
import { notFound } from "next/navigation"
import Image from 'next/image'

const PaymentPage = ({ username }) => {
    // const {data:session} = useSession()

    const [paymentform, setpaymentform] = useState({ name: '', message: '', amount: '' })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setpayments] = useState([])

    useEffect(() => {
        getData()
    }, [getData])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setpaymentform({
            ...paymentform,
            [name]: name === "amount" ? Number(value) : value
        });
    };


    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayment(username)
        setpayments(dbpayments)
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Oh ye funds", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);

        rzp1.open();
    }



    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='w-full relative '>
                {/* <Image width={50} height={50} className='object-cover w-full h-[350]' src={currentUser.coverpic } alt="nothing" />
                <div className='absolute right-[39%] md:right-[45%] -bottom-22 border-white border-2 overflow-hidden rounded-full size-30 md:size-45 ' >
                    <Image width={45} height={45} className='rounded-full object-cover size-45'  src={currentUser.profilepic } alt="nothing" />
                </div> */}

                <Image width={100} height={350} className='object-cover w-full h-[350]' src={currentUser.coverpic || "/img.jpg" } alt="nothing" />
                <div className='absolute right-[39%] md:right-[45%] -bottom-22 border-white border-2 overflow-hidden rounded-full size-30 md:size-45 ' >
                <Image width={45} height={45} className='rounded-full object-cover size-45'  src={currentUser.profilepic || "/img.jpg" } alt="nothing" />
                </div>

                {/* <Image width={50} height={50} className='object-cover w-full h-[350]' src={"/coin.gif"} alt="nothing" />
                <div className='absolute right-[39%] md:right-[45%] -bottom-22 border-white border-2 overflow-hidden rounded-full size-30 md:size-45 ' >
                    <Image width={45} height={45} className='rounded-full object-cover size-45'  src={"/coin.gif"} alt="nothing" />
                </div> */}
            </div>
            <div className="info flex items-center justify-center my-24 flex-col gap-1">
                <div className='font-bold text-lg'>
                    {username}
                </div>
                <div className='text-slate-400'>
                    lets help {username} to get funds
                </div>
                <div className='text-slate-400'>
                    {payments.length} payments . ₹{payments.reduce((a,b)=>a+b.amount,0)} raised
                </div>

                <div className="payments flex gap-5 w-[80%] mt-8 flex-col md:flex-row">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 my-5 text-white p-10">
                        <h2 className='text-2xl font-bold'>Supporters</h2>
                        <ul className='mx-5 text-lg '>
                            {payments.length === 0 && "NO FUNDS YET"}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-4 flex items-center gap-2'><Image width={28} height={28} src="/avatar.gif" alt="" />
                                    <span>
                                        {p.name} donated <b>₹{p.amount}</b> with a message {p.message}
                                    </span>
                                </li>
                            })}

                        </ul>
                    </div>
                    <div className="makepayement w-full md:w-1/2 bg-slate-900 my-5 text-white p-10">
                        <h2 className='text-2xl font-bold'>Make A Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            <div>
                                <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            </div>
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={() => pay(paymentform.amount)} className='xt-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 w-full disabled:from-gray-100 disabled:to-gray-600 ' disabled={paymentform.name?.length<3 || paymentform.message?.length<4 || paymentform.amount?.length<1} 
                            >Pay</button>
                        </div>
                        <div className='flex flex-col md:flex-row  gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 text-center' onClick={() => pay(10)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 text-center' onClick={() => pay(20)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 text-center' onClick={() => pay(30)}>Pay ₹30</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage

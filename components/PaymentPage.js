"use client"
import React,{useState} from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    // const {data:session} = useSession()

    const [paymentform, setpaymentform] = useState({name:"",message:'',amount:''})

    const handleChange=(e)=>{
        setpaymentform({...paymentform,[e.target.name]:e.target.value})
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username,paymentform)
        let orderId = a.id
        var options = {
            "key": "rzp_test_R5Vs2myBFVaE0w", // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Oh ye funds", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.URL}/api/razorpay`,
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
                <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=Mh-B5X0fAjX72C_3Ggf-nQMUUe4b4Os4Y0qll01wqq4%3D&token-time=1756944000" alt="" />
                <div className='absolute right-[45%] -bottom-22 border-white border-2 rounded-full'>
                    <img className='rounded-full' width={200} height={800} src="https://imgs.search.brave.com/4hK0D1bMbO01r36SCGP-T6-0fgJgU3fyw2qrsyH4zAw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q5L2Mw/LzI0L2Q5YzAyNDJh/ZjliNDA4ZDkxZDg3/YTZkZmViMTEzZmUz/LmpwZw" alt="" />
                </div>
            </div>
            <div className="info flex items-center justify-center my-24 flex-col gap-1">
                <div className='font-bold text-lg'>
                    {username}
                </div>
                <div className='text-slate-400'>
                    Creating animated ATT's for vtts
                </div>
                <div className='text-slate-400'>
                    943534 member . post 14 . $45054656 release
                </div>

                <div className="payments flex gap-5 w-[80%] mt-8">
                    <div className="supporters w-1/2 bg-slate-900 my-5 text-white p-10">
                        <h2 className='text-2xl font-bold'>Supporter's</h2>
                        <ul className='mx-5 text-lg '>
                            <li className='my-4 flex items-center gap-2'><img width={28} src="/avatar.gif" alt="" />
                                <span>
                                    ram donated <b>$30</b> with a message "I support you bro lot's of love"
                                </span>
                            </li>
                            <li className='my-4 flex items-center gap-2'><img width={28} src="/avatar.gif" alt="" />
                                <span>
                                    ram donated <b>$30</b> with a message "I support you bro lot's of love"
                                </span>
                            </li>
                            <li className='my-4 flex items-center gap-2'><img width={28} src="/avatar.gif" alt="" />
                                <span>
                                    ram donated <b>$30</b> with a message "I support you bro lot's of love"
                                </span>
                            </li>
                            <li className='my-4 flex items-center gap-2'><img width={28} src="/avatar.gif" alt="" />
                                <span>
                                    ram donated <b>$30</b> with a message "I support you bro lot's of love"
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="makepayement w-1/2 bg-slate-900 my-5 text-white p-10">
                        <h2 className='text-2xl font-bold'>Make A Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            <div>
                                <input onChange={handleChange} value ={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            </div>
                            <input onChange={handleChange} value ={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} value ={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button className='xt-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 w-full'>Pay</button>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 text-center'onClick={()=>pay(10)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 text-center'onClick={()=>pay(20)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 text-center'onClick={()=>pay(30)}>Pay ₹30</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage

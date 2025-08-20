import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import React from 'react'
import connectDB from '@/db/connectDB'
import User from '@/models/User'

const username = async ({params}) => {
  const {username} = await params
  
  const checkUser =  async ()=>{
    await connectDB()
    let u = await User.findOne({username: username})
    if (!u){
      return notFound()
    }
  }
  await checkUser()

  return (
    <>
    <PaymentPage username={username}/>
    </>
  )
}

export default username

export async function generateMetadata({ params }) {
  const { username } = await params; 
  return {
    title: `${username} - NeedOfFunds`
  }
}

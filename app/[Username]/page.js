import PaymentPage from '@/components/PaymentPage'
import React from 'react'

const username = async ({params}) => {
  const {username} = await params
  return (
    <>
    <PaymentPage username={username}/>
    </>
  )
}

export default username

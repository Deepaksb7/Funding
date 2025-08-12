import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex bg-gradient-to-r from-[#1d3263]  to-[#344863] text-white justify-between p-4'>
            <div className="logo font-bold text-xl">NeedOfFunding!</div>
            <ul className='flex gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
                <li>Sign up</li>
                <li>Login</li>
            </ul>
        </nav>

    )
}

export default Navbar

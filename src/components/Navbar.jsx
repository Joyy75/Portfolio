import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Joyy</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fyes_im_joyy%2F%3Figsh%3DM21uam15Ynpya2oy%26utm_source%3Dqr&is_from_rle">
            <button className='bg-gradient-to-r mt-4 from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-90 px-4 py-2 rounded-full'>Connect Me</button>
            </a>
        </div>
    </nav>
  )
}

export default Navbar
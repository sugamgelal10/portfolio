import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiThreads, SiX } from 'react-icons/si'

const Contact = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mx-[24px] my-[16px] px-[32px] font-sora'>
        <form className='flex flex-col gap-1'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name'  placeholder='Jhon Doe' className='border border-zinc-300 rounded-md p-2' required/>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email'  placeholder='jhondoe@example.com' className='border border-zinc-300 rounded-md p-2' required />
            <label htmlFor='web'>Website</label>
            <input type='text' name='web'  placeholder='JhonDoe.com (if any)' className='border border-zinc-300 rounded-md p-2' />
            <label htmlFor='message'>Name</label>
            <textarea name='message'  placeholder='Drop Your Message Here' className='border border-zinc-300 rounded-md p-2' />
            <div className='flex gap-1 justify-end'><button type='reset' name='reset' className="flex items-center gap-2 bg-black text-white w-[153px] h-[56px] rounded-md justify-center hover:bg-zinc-300">Reset</button>
            <button type='submit' name='submit' className="flex items-center gap-2 bg-black text-white w-[153px] h-[56px] rounded-md justify-center hover:bg-zinc-300">Submit</button></div>
        </form>
        <div className='text-[28px] font-bold md:mx-[80px]'>
            Let's <span className='font-extrabold font-mono text-white border-black font-outline-1'>talk</span> for something Special.<br/>
            <span className='text-[16px] text-gray-500 font-normal'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</span>
           <br/> <span className='text-[16px] font-semibold'>sugamgelal@gmail.com</span><br/>
            <span className='text-[16px] font-semibold'>+977 9815397684</span>
            <br/>
            OR
            <div className='flex justify-center'>
                <div className='flex justify-evenly gap-2'>
                    <FaLinkedin/>
                    <FaFacebook/>
                    <FaInstagram/>
                    <SiX/>
                    <SiThreads/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
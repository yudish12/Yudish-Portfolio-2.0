import Image from 'next/image'
import Link from 'next/link'
import { useRef } from "react";
import { useInView } from "framer-motion";
import React from 'react'

const Contact = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='flex md:flex-row flex-col md:px-8 px-0 py-16'>
      <div   className='md:w-1/2 w-full flex flex-col gap-4 self-center' >
        <h1
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            lineHeight:1.2
          }}
          className='md:text-7xl text-5xl font-semibold'
        >LET&apos;S CONNECT</h1>
        <p className='text-lg text-stone-400' >Say Hello at <Link className='border-b-2 text-[#D3E97A] border-[#D3E97A]' href={"mailto:yudishchakrawarty3042@gmail.com"} >yudishchakrawarty3042@gmail.com</Link></p>
        <p className='text-lg text-stone-400' >For more info, here&apos;s my <Link className='text-[#D3E97A] border-b-2 w-[110px] border-[#D3E97A]' download={true} href={"/yudish-new-resume.pdf"} >View Resume</Link></p>
        <div className="socials flex">
          <Link className='rounded-full p-3' href={"https://www.linkedin.com/in/yudish-chakrawarty-6014a5208/"}>
            <Image src={'/bxl-linkedin.svg.png'} className='min-w-[20px]' alt='linked in' width={30} height={30} />
          </Link>
          <Link className='rounded-full p-3' href={"https://github.com/yudish12"}>
            <Image src={'/bxl-github.svg.png'} className='min-w-[20px]' alt='linked in' width={30} height={30} />
          </Link>
        </div>
      </div>
      <div className='form flex flex-col gap-8 min-h-[400px] md:w-1/2 w-full' >
        <div className="input-group flex flex-col gap-2">
          <label htmlFor="name" className='text-[#C7C7C7] text-xl '>Name</label>
          <input id='name' className='bg-[#1A1A1A] md:w-[75%] w-full p-2 rounded-md' />
        </div>
        <div className="input-group flex flex-col gap-2">
          <label htmlFor="email" className='text-[#C7C7C7] text-xl '>Email</label>
          <input id='email' className='bg-[#1A1A1A] md:w-[75%] w-full p-2 rounded-md' />
        </div>
        <div className="input-group flex flex-col gap-2">
          <label htmlFor="phone" className='text-[#C7C7C7] text-xl '>Phone</label>
          <input id='phone' className='bg-[#1A1A1A] md:w-[75%] w-full p-2 rounded-md' />
        </div>
        <div className="input-group flex flex-col gap-2" >
          <label htmlFor="message" className='text-[#C7C7C7] text-xl '>Message</label>
          <textarea id='message' rows={5} className='bg-[#1A1A1A] md:w-[75%] w-full p-2 rounded-md' >

          </textarea>
        </div>
      </div>
    </div>
  )
}

export default Contact
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex justify-center items-center gap-8 mt-20 py-12 ' >
            <div className="info max-w-[600px]">
                <h1 className='text-5xl font-semibold' >
                    <span>HI, I AM</span><br /> YUDISH CHAKRAWARTY
                </h1>
                <p className='text-lg text-[#C7C7C7]' >
                    A Software Developer Based out of India.<br />
                    Passionate About building Mobile Applications,Web Applications and Scaling Backend Applications and Databases
                </p>
                <div className="btns mt-4 flex items-center gap-6">
                    <button className='bg-[#D3E97A] flex justify-between items-center text-black font-semibold text-xl px-2 py-2 rounded-lg' >
                        Contact Me
                        <Image alt='dot' className='min-w-[4px]' src={'/circle.png'} width={25} height={25} />
                    </button>
                    <Link className='bg-[#222222] rounded-full p-3' href={"https://www.linkedin.com/in/yudish-chakrawarty-6014a5208/"}>
                        <Image src={'/bxl-linkedin.svg.png'} className='min-w-[20px]' alt='linked in' width={30} height={30} />
                    </Link>
                    <Link className='bg-[#222222] rounded-full p-3' href={"https://github.com/yudish12"}>
                        <Image src={'/bxl-github.svg.png'} className='min-w-[20px]' alt='linked in' width={30} height={30} />
                    </Link>
                </div>
            </div>
            <div className="image">
                <Image className='rounded-xl min-w-[300px]' alt='banner' src={'/82305974.jfif'} width={500} height={300} />
            </div>

        </div>
    )
}

export default Hero
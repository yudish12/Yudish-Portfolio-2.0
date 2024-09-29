import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse justify-center items-center gap-8 mt-20 py-12 ' >
            <div className="info md:max-w-[600px] max-w-[400px] px-8 sm:px-0">
                <h1 style={{lineHeight:1.3}} className='sm:text-5xl text-3xl font-semibold' >
                    <span>HI, &nbsp;I AM</span>&nbsp; YUDISH CHAKRAWARTY
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
            <div className="image flex justify-center">
                <Image className='rounded-xl max-w-[80%] sm:max-w-[100%]' alt='banner' src={'/yudish_pfp.jpg'} width={400} height={300} />
            </div>

        </div>
    )
}

export default Hero
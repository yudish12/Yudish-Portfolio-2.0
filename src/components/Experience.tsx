import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from 'next/link'
import React from 'react'

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
        <div className='flex md:flex-row flex-col md:px-8 px-0 py-16'>
            <div className='md:w-1/2 w-full  self-center' ref={ref} >
                <h1 
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                        lineHeight:1.2
                    }}
                    className='md:text-7xl text-5xl font-semibold'
                >
                    My Experience
                </h1>
                
            </div>
            <div className='md:w-1/2 w-full flex flex-col gap-6'>
                <h1 className='md:text-2xl text-xl font-semibold' >
                    I am a Software Developer based in Delhi,India. Has done computer science engineering.
                </h1>
                <p><span className='md:text-3xl text-2xl font-bold text-[#C7C7C7] bebas-neue tracking-[2px]' ><u>Software Engineer (AI)</u></span><br />
                    I have worked contractually with <strong><u>Micro1 for a silicon valley client</u></strong> where I helped the client to shape ai models and refining dataset and helped them to train AI models worked on sql and Exploratory Data Analysis.
                </p>

                <p>
                    <span className='md:text-3xl text-2xl font-bold text-[#C7C7C7] bebas-neue tracking-[2px]'><u>Fullstack/App Developer Experience</u></span><br />
                    I have worked as software developer at cosmic technologies which is a service based startup where I have worked on many projects building <strong><u>Mobile applications and Web Apps</u></strong>
                    Solved complex problems using <strong><u>Typescript, Javascript, React, Nodejs, React Native, Nextjs</u></strong> to fulfill client&apos;s needs
                </p>

                <p>
                    <span className='md:text-3xl text-2xl font-bold text-[#C7C7C7] bebas-neue tracking-[2px]' ><u>Backend Developer Experience</u></span><br />
                    I have worked as a Backend developer at Breakway IT solutions which was also a service based startup where I have worked on building a scalable backend solution using  <strong><u>Nodejs, Express, Mongodb, Elastic Search, Redis,   SocketIO</u></strong> Learned how to scale backend api&apos;s and microservice architecture deployment of backend services.
                </p>
                <Link className='text-[#D3E97A] border-b-2 w-[110px] border-[#D3E97A]' download={true} href={"/CV Yudish Chakrawarty 15914802720 CSE MAIT 9810870142 (2) (1) (2) (1) (1) (1).pdf"} >View Resume</Link>
                
            </div>

        </div>
    )
}

export default Experience
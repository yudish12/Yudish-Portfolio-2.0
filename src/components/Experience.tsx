import Link from 'next/link'
import React from 'react'

const Experience = () => {
    return (
        <div className='flex px-8 py-16'>
            <div className='w-1/2  self-center' >
                <h1 className='text-7xl font-semibold'>My Experience</h1>
            </div>
            <div className='w-1/2 flex flex-col gap-6'>
                <h1 className='text-2xl font-semibold' >
                    I am a Software Developer based in Delhi,India. Has done computer science engineering.
                </h1>
                <p><span className='text-3xl font-bold text-[#C7C7C7] bebas-neue tracking-[2px]' ><u>Software Engineer (AI)</u></span><br />
                    I have worked contractually with <strong><u>Micro1 for a silicon valley client</u></strong> where I helped the client to shape ai models and refining dataset and helped them to train AI models worked on sql and Exploratory Data Analysis.
                </p>

                <p>
                    <span className='text-3xl font-bold text-[#C7C7C7] bebas-neue tracking-[2px]' ><u>Fullstack/App Developer Experience</u></span><br />
                    I have worked as software developer at cosmic technologies which is a service based startup where I have worked on many projects building <strong><u>Mobile applications and Web Apps</u></strong>
                    Solved complex problems using <strong><u>Typescript, Javascript, React, Nodejs, React Native, Nextjs</u></strong> to fulfill client&apos;s needs
                </p>

                <p>
                    <span className='text-3xl font-bold text-[#C7C7C7] bebas-neue tracking-[2px]' ><u>Backend Developer Experience</u></span><br />
                    I have worked as a Backend developer at Breakway IT solutions which was also a service based startup where I have worked on building a scalable backend solution using  <strong><u>Nodejs, Express, Mongodb, Elastic Search, Redis,   SocketIO</u></strong> Learned how to scale backend api&apos;s and microservice architecture deployment of backend services.
                </p>
                <Link className='text-[#D3E97A] border-b-2 w-[145px] border-[#D3E97A]' download={true} href={"/"} >Download Resume</Link>
            </div>

        </div>
    )
}

export default Experience
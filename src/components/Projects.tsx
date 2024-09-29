import { projectType, projects } from '@/utils'
import React, { useState } from 'react'
import Cards from './Cards'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    const [selectedId, setSelectedId] = useState<null | projectType>(null)

    return (
        <>
            <div className='flex flex-col py-12'>
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            style={{
                                height:"100vh",
                                position: "fixed",
                                top: "0%",
                                width:"100vw",
                                zIndex:50,
                                display:"flex",
                                justifyContent:"center",
                                background:" rgba(0,0,0,0.50)",
                            }}
                        >
                            <motion.div
                                style={{
                                    position: "fixed",
                                    top: "30%",
                                    left:"25vw",
                                    width: "50%",
                                    height:400,
                                    margin:"0 auto",
                                    display: "flex",
                                    border: "1px ridge white",
                                    borderRadius:"12px",
                                    background:"#1A1A1A"
                                }}
                                className='z-40 bg-slate-800'
                                layoutId={selectedId.name}>
                                <motion.div style={{
                                    padding:20,
                                    borderRadius:"12px",
                                }}>
                                    <motion.img 
                                        style={{
                                            width:"300px",
                                            minWidth:"300px",
                                            height:"250px",
                                            borderRadius:"12px"
                                        }} 
                                        width={600} 
                                        src={selectedId.image} 
                                    />
                                </motion.div>
                                <motion.div className='p-8 rounded-[12px] w-full bg-black flex flex-col   overflow-y-auto' >
                                    <motion.h2>{selectedId.name}</motion.h2>
                                    <motion.p>{selectedId.description}</motion.p>
                                    <motion.div className='mt-4' >
                                        <motion.h5 className='py-3 border-b-2 border-gray-500 font-medium'>PROJECT INFO</motion.h5>
                                        <motion.div className='py-3 border-b-2 flex justify-between border-gray-500 font-medium'>
                                            <p>Year</p>
                                            <p>2023</p>
                                        </motion.div>
                                        <motion.div className='py-3 border-b-2 flex justify-between border-gray-500 font-medium'>
                                            <p>Role</p>
                                            <p>Front End Development</p>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div className='mt-3 flex gap-12' >
                                        {selectedId.liveDemo && <Link href={selectedId.liveDemo} className='border-b-2 text-[#D3E97A] border-[#D3E97A]' >Live Demo</Link> }
                                        <Link href={selectedId.url} className='border-b-2 text-[#D3E97A] border-[#D3E97A]' >Github URL</Link>
                                    </motion.div>
                                </motion.div>
                                <motion.button className='absolute right-5 top-1 ' onClick={() => setSelectedId(null)} >
                                    <Image src={'/icons8-cross.svg'} alt='Cross Icon' width={30} height={30} />
                                </motion.button>
                            </motion.div>
                        </motion.div>

                    )}
                </AnimatePresence>

                <h1 className='text-[#FFFFF] tracking-[3px] bebas-neue px-12 py-4 mt-4 text-3xl'>Personal Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 sm:grid-rows-2 grid-rows-4 lg:grid-cols-4 gap-x-8 gap-y-8 px-6 sm:px-12">
                    {projects.map((e) => <Cards project={e} setSelectedId={setSelectedId} key={e.name} />)}
                </div>
            </div>
            
        </>
    )
}

export default Projects
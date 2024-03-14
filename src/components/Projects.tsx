import { projectType, projects } from '@/utils'
import React, { useState } from 'react'
import Cards from './Cards'
import { AnimatePresence, motion } from 'framer-motion'

const Projects = () => {
    const [selectedId, setSelectedId] = useState<null | projectType>(null)

    return (
        <>
            <div className='flex flex-col py-12'>
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            style={{
                                border:"2px solid red",
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
                                    top: "50%",
                                    width: "90%",
                                    margin:"0 auto",
                                    display: "flex",
                                    border: "2px solid red",
                                }}
                                className='z-40 bg-slate-800'
                                layoutId={selectedId.name}>
                                <motion.img width={200} height={200} src={selectedId.image} />
                                <motion.h5>{selectedId.name}</motion.h5>
                                <motion.h2>{selectedId.url}</motion.h2>
                                <motion.button onClick={() => setSelectedId(null)} >Close</motion.button>
                            </motion.div>
                        </motion.div>

                    )}
                </AnimatePresence>

                <h1 className='text-[#C7C7C7] bebas-neue px-12 py-4 mt-4 text-3xl'>Personal Projects</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 px-12'>
                    {projects.map((e) => <Cards project={e} setSelectedId={setSelectedId} key={e.name} />)}
                </div>
            </div>
        </>
    )
}

export default Projects
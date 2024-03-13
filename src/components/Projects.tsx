import { projects } from '@/utils'
import React, { useState } from 'react'
import Cards from './Cards'
import { AnimatePresence, motion } from 'framer-motion'

const Projects = () => {
    const [selectedId, setSelectedId] = useState<null | string>(null)

    return (
        <>
            <AnimatePresence>
                {selectedId && (
                    <motion.div style={{ position:"fixed",top:"50%",width:"100%",display:"flex",alignItems:"center",flexDirection:"column" }} layoutId={selectedId}>
                        <motion.h5>{selectedId}</motion.h5>
                        <motion.h2>{selectedId}</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)} >Close</motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='flex flex-col py-12'>
                <h1 className='text-[#C7C7C7] bebas-neue px-12 py-4 mt-4 text-3xl'>Personal Projects</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 px-12'>
                    {projects.map((e) => <Cards project={e} setSelectedId={setSelectedId} key={e.name} />)}
                </div>
            </div>
        </>
    )
}

export default Projects
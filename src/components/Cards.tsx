import React from 'react'
import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import { projectType } from '@/utils';

const Cards = (props:{project:projectType,setSelectedId:React.Dispatch<React.SetStateAction<projectType | null>>}) => {
	const {project,setSelectedId} = props
	const cardVariants: Variants = {
		offscreen: {
			y: 300
		},
		onscreen: {
			y: 5,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8
			}
		}
	};

	return (
		<motion.div
			layoutId={project.name} onClick={() => setSelectedId(project)}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
		>
			<motion.div className="flex flex-col " variants={cardVariants}>
        		<Image 
					style={{
						maxHeight:"200px",
						minHeight:"200px",
						objectFit:"cover",
						borderTopLeftRadius:"10px",
						borderTopRightRadius:"10px"
					}} 
					alt="logo" 
					width={400} 
					height={200} 
					src={project.image} 
				/>
				<div className="bg-white text-black px-8 py-2 rounded-b-[10px]">
					<h2 className='font-semibold' >{project.name}</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex!</p>
				</div>
      		</motion.div>
		</motion.div>
	)
}

export default Cards
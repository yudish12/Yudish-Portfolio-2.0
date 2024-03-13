"use client"
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-12 px-12 py-6">
			<Header />
			<AnimatePresence>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 20, opacity: 0 }}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20,
					}}
				>
					<Hero />
					<Projects />
				</motion.div>
			</AnimatePresence>
		</main >

	);
}

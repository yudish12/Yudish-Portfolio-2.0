import Link from 'next/link'
import React from 'react'

const Header = () => {
	return (
		<nav className='flex justify-between w-full py-6 top-0 items-center fixed z-20 bg-black px-12' >
			<div className="left text-[#C7C7C7] bebas-neue text-3xl">YUDISH&apos;S &nbsp; PORTFOLIO</div>
			<div className="right text-[#C7C7C7] bebas-neue text-xl flex gap-6 ">
				<Link href={"#"} className='hover:underline cursor-pointer' >Personal Projects</Link>
				<Link href={"#"} className='hover:underline cursor-pointer'>My Experience</Link>
				<Link href={"#"} className='hover:underline cursor-pointer'>My Blogs</Link>
			</div>
		</nav>
	)
}

export default Header
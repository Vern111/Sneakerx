'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { LayoutGroup, motion } from 'framer-motion'

const navItems = {
	'/': {
		name: 'home',
	},
	'/contact': {
		name: 'contact',
	},
	'/login': {
		name: 'login',
	},
	'/sign-up': {
		name: 'sign up',
	},
}

export default function Navbar() {
	let pathname = usePathname() || '/'

	return (
		<nav className="mx-auto mb-[-175px] p-4 bg-transparent">
			<div className="container mx-auto flex items-center justify-between">
				<div className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-grey-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50 ">
					<Image
						src="/assets/logotype.svg"
						width={200}
						height={200}
						className="w-48 md:w-64 lg:w-72"
						alt="Home Smart Logo"
					/>
				</div>
				{/* <button
					id="menu"
					className="lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-grey-400 text-neutral-900 hover:text-neutral-600 transition-colors"
					aria-expanded="false"
					aria-label="Open Menu"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button> */}
				<div
					role="menubar"
					className="hidden flex-col gap-4 absolute z-40 right-0 left-0 top-16 bg-transparent text-right text-lg p-6 items-right lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full"
				>
					<Link
						href="/"
						className="py-1 px-6 text-black dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-grey-400 hover:text-neutral-600 transition-colors font-black text-xl"
					>
						Home
					</Link>
					<Link
						href="/"
						className="py-1 px-4 text-black dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-grey-400 hover:text-neutral-600 transition-colors lg:mr-auto font-black text-xl"
					>
						Contact
					</Link>
					<Link
						href="/"
						className="py-1 px-6 text-black dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-[#F12307] hover:text-neutral-600 transition-colors font-black text-xl"
					>
						Login
					</Link>
					<Link
						href="/"
						className="py-1 px-6 text-black dark:text-white focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-[#F12307] hover:text-neutral-600 transition-colors font-black text-xl"
					>
						Sign Up
					</Link>
				</div>
			</div>
		</nav>
	)
}

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Link } from 'next/link'

import Ticker from '@components/Ticker'


export default async function Page() {
	return (
		<div className=" mx-auto text-neutral-900 dark:text-neutral-200 ">
			<div className="relative h-[70vw] pt-0 md:pt-2 lg:pt-4 bg-no-repeat bg-cover bg-[url('/assets/Hero1.svg')]">
				<div className="bg-[#F12307] w-screen">
					<div className="min-h-1 flex items-center justify-center">
						{/* <!-- card goes here --> */}
						<div className="w-screen z-40 rounded text-white overflow-hidden">
							<Ticker />
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden">
				<Link
					href="#"
					className="py-2 px-6 bg-grey-400 dark:text-neutral-300 mx-auto my-12 flex gap-2 shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-grey-400 dark:ring-offset-neutral-300"
				>
					<span>Download the App</span>
				</Link>
				<div className="relative">
					<Image
						src="/assets/dots.svg"
						className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 xl:-left-18"
						alt="dots"
						aria-hidden="true"
					/>
					<Image
						src="/assets/dots.svg"
						className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 xl:-right-18"
						alt="dots"
						aria-hidden="true"
					/>
					<h2 id="qualities" className="sr-only">
						Our Qualities
					</h2>
					<div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
						<div className="grid gap-4 justify-items-center text-center md:flex-1">
							<div className="rounded-full border-8 border-[#F12307] p-4">
								{/* <FaUser size={36} /> */}
								<p>FaUser</p>
							</div>
							<h3 className="text-3xl font-bold">Safe</h3>
							<p>Our products are secure and private deadstock</p>
						</div>
						<div className="grid gap-4 justify-items-center text-center md:flex-1">
							<div className="rounded-full border-8 border-[#F12307] p-4">
								{/* <FaCheck size={36} /> */}
								<p>FaCheck</p>
							</div>
							<h3 className="text-3xl font-bold">Efficient</h3>
							<p>Feel good about your wallet and the platform</p>
						</div>
						<div className="grid gap-4 justify-items-center text-center md:flex-1">
							<div className="rounded-full border-8 border-[#F12307] p-4">
								{/* <FaChartLine size={36} /> */}
								<p>FaChartLine</p>
							</div>
							<h3 className="text-3xl font-bold">Proven</h3>
							<p>Leading the Sneaker world for 10 years</p>
						</div>
					</div>
				</div>
				<div className="text-center grid gap-8 place-items-center">
					<div className="grid gap-4">
						<h2
							id="partners"
							className="text-4xl font-bold text-[#F12307]"
						>
							Our Partners
						</h2>
						<p className="w-full max-w-lg">
							Our product is to create a social experience that is good
							enough for the amazing people in the industry.
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
						<div className="p-4  shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner1.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4  shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner2.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4  shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner3.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4  shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner4.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4  shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner5.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4  shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner6.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4  shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner7.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
					</div>
				</div>
				<div className="relative mb-32">
					<div className="flex flex-wrap-reverse gap-8 justify-center">
						<div className="flex gap-6 flex-wrap flex-col items-start lg:justify-center">
							<div className="flex flex-wrap flex-col items-start gap-2">
								<h2 className="text-4xl font-bold">
									Welcome, to your home <br /> for all things sneakers!
								</h2>
								<p className="max-w-md">
									All our supported software includes traditional
									inputs so you can integrate our products into your
									operation in a way that’s best for everyone.
								</p>
							</div>
							<Link
								href="#"
								className="py-2 px-6 bg-[#F12307] dark:text-white flex gap-2 shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-[#F12307] dark:ring-offset-neutral-800"
							>
								Sign Up
							</Link>
						</div>
						<Image src="/assets/table.png" alt="Table" className="" />
					</div>
					<div className="absolute -bottom-6 -right-32 -z-10 aspect-square md:border-8 border-[#F12307] rounded-full md:w-64 lg:w-96 xl:max-w-lg"></div>
				</div>
			</div>
		</div>
	)
}

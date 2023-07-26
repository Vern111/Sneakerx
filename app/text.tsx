import Image from 'next/image'
import { motion } from 'framer-motion'
import { Link } from 'next/link'

export default async function Page() {
	return (
		<div className="max-w-[2000px] mx-auto text-neutral-900 dark:text-neutral-200 bg-white dark:bg-neutral-800">
			<header className="relative h-[70vw] pt-0 md:pt-2 lg:pt-4 bg-no-repeat bg-cover bg-[url('/assets/Hero1.svg')]">
				<nav className="mx-auto p-4 bg-transparent">
					<div className="container mx-auto flex items-center justify-between">
						<Link href="/">
							<a
								className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-grey-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50 hover:opacity-75 transition-opacity"
								aria-label="Go to homepage"
							>
								<Image
									src="/assets/logotype.svg"
									width={200}
									className="w-48 md:w-64 lg:w-72"
									alt="Home Smart Logo"
								/>
							</a>
						</Link>
						<button
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
						</button>
						<div
							role="menubar"
							className="hidden flex-col gap-4 absolute z-40 right-0 left-0 top-16 bg-transparent text-right text-lg p-6 items-right lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full"
						>
							<Link href="/">
								<a
									role="menuitem"
									className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-grey-400 hover:text-neutral-600 transition-colors font-black"
								>
									Home
								</a>
							</Link>
							<Link href="/">
								<a
									role="menuitem"
									className="py-1 px-4 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-grey-400 hover:text-neutral-600 transition-colors lg:mr-auto font-black"
								>
									Contact
								</a>
							</Link>
							<Link href="/">
								<a
									role="menuitem"
									className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-[#F12307] hover:text-neutral-600 transition-colors font-black"
								>
									Login
								</a>
							</Link>
							<Link href="/">
								<a
									role="menuitem"
									className="py-1 px-6 dark:text-white focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-[#F12307] hover:text-neutral-600 transition-colors font-black"
								>
									Sign Up
								</a>
							</Link>
						</div>
					</div>
				</nav>

				<div className="bg-[#F12307] w-screen">
					<div className="min-h-1 flex items-center justify-center">
						{/* <!-- card goes here --> */}
						<div className="w-screen z-40 rounded text-white overflow-hidden">
							{/* <!-- scrolling list goes here --> */}
							<div className="absolute bottom-0 bg-[#F12307] left-0 right-0 space-y-1">
								<div className="scroller flex space-x-1 whitespace-nowrap text-black font-black tracking-widest subpixel-antialiased text-center">
									<a className="rounded">Jordan 1:1</a>
									<a className="rounded">Streetwear 1:2</a>
									<a className="rounded">Adidas 2:1</a>
									<a className="rounded">Nike 2:2</a>
									<a className="rounded">Womens 3:1</a>
									<a className="rounded">Collectibles 3:2</a>
									<a className="rounded">Yeezy 4:1</a>
									<a className="rounded">Trending 4:2</a>
									<a className="rounded">Offwhite</a>
									<a className="rounded">Jordan 1:1</a>
									<a className="rounded">Streetwear 1:2</a>
									<a className="rounded">Adidas 2:1</a>
									<a className="rounded">Nike 2:2</a>
									<a className="rounded">Womens 3:1</a>
									<a className="rounded">Collectibles 3:2</a>
									<a className="rounded">Yeezy 4:1</a>
									<a className="rounded">Trending 4:2</a>
									<a className="rounded">Jordan 1:1</a>
									<a className="rounded">Streetwear 1:2</a>
									<a className="rounded">Adidas 2:1</a>
									<a className="rounded">Nike 2:2</a>
									<a className="rounded">Womens 3:1</a>
									<a className="rounded">Collectibles 3:2</a>
									<a className="rounded">Yeezy 4:1</a>
									<a className="rounded">Trending 4:2</a>
									<a className="rounded">Offwhite</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* <main className="grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden">
				<Link href="#">
					<a className="py-2 px-6 bg-grey-400 dark:text-neutral-300 mx-auto my-12 flex gap-2 shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-grey-400 dark:ring-offset-neutral-300">
						<AiOutlineDownload size={24} />
						<span>Download the App</span>
					</a>
				</Link>
				<section aria-labelledby="qualities" className="relative">
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
								<FaUser size={36} />
							</div>
							<h3 className="text-3xl font-bold">Safe</h3>
							<p>Our products are secure and private deadstock</p>
						</div>
						<div className="grid gap-4 justify-items-center text-center md:flex-1">
							<div className="rounded-full border-8 border-[#F12307] p-4">
								<FaCheck size={36} />
							</div>
							<h3 className="text-3xl font-bold">Efficient</h3>
							<p>Feel good about your wallet and the platform</p>
						</div>
						<div className="grid gap-4 justify-items-center text-center md:flex-1">
							<div className="rounded-full border-8 border-[#F12307] p-4">
								<FaChartLine size={36} />
							</div>
							<h3 className="text-3xl font-bold">Proven</h3>
							<p>Leading the Sneaker world for 10 years</p>
						</div>
					</div>
				</section>
				<section
					aria-labelledby="partners"
					className="text-center grid gap-8 place-items-center"
				>
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
						<div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner1.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner2.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner3.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner4.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner5.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner6.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
						<div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
							<Image
								src="/assets/partner7.svg"
								alt="Partner"
								className="h-16 w-16"
								width={64}
								height={64}
							/>
						</div>
					</div>
				</section>
				<section aria-labelledby="home" className="relative mb-32">
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
							<Link href="#">
								<a className="py-2 px-6 bg-[#F12307] dark:text-white flex gap-2 shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-[#F12307] dark:ring-offset-neutral-800">
									Sign Up
								</a>
							</Link>
						</div>
						<Image src="/assets/table.png" alt="Table" className="" />
					</div>
					<div className="absolute -bottom-6 -right-32 -z-10 aspect-square md:border-8 border-[#F12307] rounded-full md:w-64 lg:w-96 xl:max-w-lg"></div>
				</section>
			</main> */}
			<section
				aria-labelledby="contact"
				className="container mx-auto px-8 overflow-hidden"
			>
				<div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
					<div className="md:flex-1 md:max-w-sm relative">
						<Image
							src="/assets/lamp.png"
							alt="Lamp"
							className="mx-auto"
						/>
						<Link href="#">
							<a className="py-2 px-6 bg-[#F12307] dark:text-white w-max mx-auto mt-12 md:mb-12 flex gap-2 shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-[#F12307] dark:ring-offset-neutral-800">
								<AiOutlineDownload size={24} />
								<span>Download the App</span>
							</a>
						</Link>
						<Image
							src="/assets/iPhone14.png"
							alt="app"
							width={240}
							className="hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-16 xl:max-w-xs"
						/>
						<div className="absolute -bottom-18 left-1/2 -translate-x-1/2 -z-10 aspect-square md:border-8 border-[#F12307] rounded-full md:w-72 lg:w-96"></div>
					</div>
					<form className="relative border-8 border-neutral-900 p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-gray-300 dark:bg-neutral-800 w-full">
						<h2
							id="contact"
							className="text-3xl font-bold text-neutral-300"
						>
							Let’s Connect
						</h2>
						<div className="relative">
							<input
								type="text"
								id="name"
								className="peer form-input w-full border-4 border-white rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-[#F12307] focus:border-[#F12307] focus:outline-none dark:bg-white dark:text-neutral-900 placeholder-transparent"
								placeholder="Your Name"
							/>
							<label
								htmlFor="name"
								className="text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
							>
								Your Name
							</label>
						</div>
						<div className="relative">
							<input
								type="email"
								id="email"
								className="peer form-input w-full border-4 border-white rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-[#F12307] focus:border-[#F12307] focus:outline-none dark:bg-white dark:text-neutral-900 placeholder-transparent"
								placeholder="Your Email"
							/>
							<label
								htmlFor="email"
								className="text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
							>
								Your Email
							</label>
						</div>
						<div className="relative">
							<textarea
								name="content"
								id="content"
								cols={20}
								rows={5}
								className="peer form-textarea resize-none w-full border-4 border-white rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-[#F12307] focus:border-[#F12307] focus:outline-none dark:bg-white dark:text-neutral-900 placeholder-transparent"
								placeholder="How can we help?"
							></textarea>
							<label
								htmlFor="content"
								className="text-neutral-500 text-sm font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
							>
								How can we help?
							</label>
						</div>
						<Link href="/">
							<a
								role="menuitem"
								className="py-2 px-6 bg-[#F12307] text-white w-max shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-[#F12307]"
							>
								Sign Up
							</a>
						</Link>
					</form>
				</div>
			</section>
			<script type="module" src="/main.js"></script>
		</div>
	)
}

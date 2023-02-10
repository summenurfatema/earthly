import React from 'react';
import intro from '../../assets/intro.png'
import AOS from 'aos'
import 'aos/dist/aos.css';


const News = () => {
AOS.init()
    return (
        <div className=''>
            <div data-aos="fade-up" className='flex -space-x-16 justify-center items-center '>
                <img src={intro} className='h-32 w-32' alt=' '/>
                <h1 className='text-xl md:text-4xl font-bold'>News About Earthly</h1>
            </div>
            <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
	<div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
		<div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
			<div className="flex flex-col space-y-8 md:space-y-12">
				<div data-aos="fade-up-right" className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 dark:text-gray-400">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href=" " className="hover:underline">News about earthly</a>
					<p className="text-xs dark:text-gray-400">47 minutes ago by
						<a rel="noopener noreferrer" href=" " className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
					</p>
				</div>
				<div data-aos="fade-up-left" className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 dark:text-gray-400">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href=" " className="hover:underline">News about earthly</a>
					<p className="text-xs dark:text-gray-400">2 hours ago by
						<a rel="noopener noreferrer" href=" " className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
					</p>
				</div>
				<div data-aos="fade-up-right" className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 dark:text-gray-400">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href=" " className="hover:underline">News about earthly.</a>
					<p className="text-xs dark:text-gray-400">4 hours ago by
						<a rel="noopener noreferrer" href=" " className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
					</p>
				</div>
			</div>
			<div data-aos="fade-up-left" className="flex flex-col w-full space-y-2">
				<div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
					<div className="w-1/2 h-full dark:bg-violet-400"></div>
				</div>
				<a rel="noopener noreferrer" href=" " className="flex items-center justify-between w-full">
					<span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
					<svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-violet-400">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
			</div>
		</div>
		<div data-aos="fade-down" className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{backgroundImage: `url('https://cdn.shopify.com/s/files/1/0439/8809/1048/files/Screen_20Shot_202020-10-30_20at_204.48_edited_300x300.png?v=1614319399')`, backgroundPosition: 'center center', backgroundBlendMode: 'multiply', backgroundSize: 'cover'}}>

			<a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900" href=" ">
				<span className="flex items-center mb-4 space-x-2 dark:text-violet-400">
					<span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
						<span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
					</span>
					<span className="text-sm font-bold">Live</span>
				</span>
		<h1 rel="noopener noreferrer" href=" " className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-100">News about EARTHLY !!!</h1>
			</a>
		</div>
		<div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
			<div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
				<button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">Latest</button>
				<button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400">Popular</button>
			</div>
			<div className="flex flex-col divide-y divide-gray-700">
				<div data-aos="fade-up-left" className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://static.wixstatic.com/media/9c7be0_13e58110923a4244bd1250fafabc0615~mv2.png/v1/fill/w_2500,h_1559,al_c/9c7be0_13e58110923a4244bd1250fafabc0615~mv2.png" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href=" " className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
						<p className="mt-auto text-xs dark:text-gray-400">5 minutes ago
							<a rel="noopener noreferrer" href=" " className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
						</p>
					</div>
				</div>
				<div data-aos="fade-up-right"  className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7t7YW5y_7FiUbZUOc7jOwOgtwH9EuoTvwiw&usqp=CAU" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href=" " className="font-serif hover:underline">Nulla consectetur efficitur.</a>
						<p className="mt-auto text-xs dark:text-gray-400">14 minutes ago
							<a rel="noopener noreferrer" href=" " className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
						</p>
					</div>
				</div>
				<div data-aos="fade-up-left"  className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://static.wixstatic.com/media/9c7be0_13e58110923a4244bd1250fafabc0615~mv2.png/v1/fill/w_2500,h_1559,al_c/9c7be0_13e58110923a4244bd1250fafabc0615~mv2.png" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href=" " className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
						<p className="mt-auto text-xs dark:text-gray-400">22 minutes ago
							<a rel="noopener noreferrer" href=" " className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World</a>
						</p>
					</div>
				</div>
				<div data-aos="fade-up-right"  className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7t7YW5y_7FiUbZUOc7jOwOgtwH9EuoTvwiw&usqp=CAU" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href=" " className="font-serif hover:underline">Suspendisse potenti.</a>
						<p className="mt-auto text-xs dark:text-gray-400">37 minutes ago
							<a rel="noopener noreferrer" href=" " className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default News;
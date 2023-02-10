import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Offer = () => {
AOS.init()
    return (
        <div>
            <div  className="p-6 py-12 bg-[#2866D7] dark:text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 data-aos="fade-right" className="text-center text-6xl tracking-tighter font-bold">Up to 10% off
				
			</h2>
			<div data-aos="fade-left" className="space-x-2 text-center py-2 lg:py-0">
				<span> Plus free shipping! For </span>
				<span className="font-bold text-lg">500$ shopping</span>
			</div>
			<a data-aos="fade-down" href=" " rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a>
		</div>
	</div>
</div>
        </div>
    );
};

export default Offer;
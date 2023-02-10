import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

const JoinGroup = () => {
AOS.init()
    return (
        <div>
<div className="w-full bg-blue-400">
	<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
		<h1 data-aos="fade-left" className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Join our group</h1>
		<p  data-aos="fade-right"  className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
		<div  data-aos="fade-down"  className="flex flex-row">
			<input type="text" placeholder="@gmail.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
			<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-blue-600 text-white">Send</button>
		</div>
	</div>
</div>
        </div>
    );
};

export default JoinGroup;
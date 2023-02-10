import React from 'react';
import intro from '../../assets/intro.png'
import { FaPhone, FaEnvelopeOpen , FaLocationArrow} from 'react-icons/fa';
//import {  IoLocation} from 'react-icons/io';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Contact = () => {
AOS.init()
    return (
      <div>
         <div data-aos="fade-down" className='flex -space-x-16 justify-center items-center '>
                <img src={intro} className='h-32 w-32' alt=' '/>
                <h1 className='text-2xl lg:text-4xl font-bold'>Contact With Us</h1>
            </div>
      
        <div  className='bg-[#fff] flex items-center lg:justify-evenly flex-col md:flex-row lg:px-14'>

           {/* left */}
          <div data-aos="zoom-in-left" className="w-full md:w-1/3 lg:w-2/5 relative">
     
          <div className="pl-7 md:pl-10 my-6">
      
        <div className="space-y-2 md:space-y-5 lg:space-y-7">
            {/*1 */}

           <div className="flex items-center space-x-2">
          <FaPhone className='h-8 w-10 text-blue-700'/>
          <div className="space-y-0">
<p className="text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide  font-normal tracking-tight">Phone</p>
<p className=" text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide font-normal tracking-tight">+353 1552 4908</p>
</div>
</div>
            {/*2 */}

            <div className="flex items-center space-x-2">
            <FaEnvelopeOpen className='h-8 w-10 text-blue-700'/>
<div className="space-y-0">
<p className=" text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide font-normal tracking-tight">E-mail</p>
<p className="text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide font-normal tracking-tight">hello@earthly.ie</p>
</div>
</div>
            {/*3*/}

            <div className="flex items-center space-x-2">
            <FaLocationArrow className='h-8 w-10 text-blue-700'/>

<div className="space-y-0">

<p className=" text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide font-normal tracking-tight">16 Liffey Ave, Valley Park</p>

<p className=" text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide font-normal tracking-tight">Lucan, Co. Dublin, Ireland</p>
</div>
</div>
</div>
</div>
</div>

      {/* Right side */}
     
      <div data-aos="zoom-in-right" className="w-full md:w-2/3 lg:w-3/5 px-3 my-5">
      <div className="border rounded-full py-0 md:mx-0 lg:mx-20">
        <form>
          <div className="flex flex-col items-center space-y-10 pb-14 pt-32 md:pt-28 md:pb-6 ">
            <input
              name="name"
              type="name"
              className=" text-xl border-b-2 py-3 text-black  w-4/5 focus-none focus:outline-none"
              placeholder="Full Name"
            />

            <input
              className=" text-xl border-b-2 py-3 text-black  w-4/5 focus-none focus:outline-none"
              name="email"
              type="email"
              placeholder="Email Address"
            />

            <textarea
              className=" text-xl border-b-2 py-3 text-black  w-4/5 focus-none focus:outline-none"
              name="messege"
              placeholder="Your Messege">
            </textarea>
          </div> 
         <div className="h-24 w-24 lg:h-40 lg:w-40 border  border-gray-500 hover:pl-2  hover:pt-2 rounded-full">
         <div className="h-20 w-20 lg:h-36 lg:w-36  rounded-full hover:scale-110  bg-[#245CC1] flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold uppercase">Send</h1>
         </div>
         </div>
        </form>
        </div>
      </div>
    </div>
    </div>
      
    );
};

export default Contact;
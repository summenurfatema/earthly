import React from 'react';

const Contact = () => {
    return (
        <div className='bg-[#fff] flex items-center lg:justify-evenly flex-col md:flex-row lg:px-14'>

           {/* left */}
          <div className="w-full md:w-1/3 lg:w-2/5 relative">
     
          <div className="pl-7 md:pl-10 my-6">
         <p className='font-semibold mb-3 uppercase md:font-bold md:text-xl lg:text-2xl lg:mb-7'>Contact with us</p>
        <div className="space-y-2 md:space-y-5 lg:space-y-7">
            {/*1 */}

           <div className="flex items-center space-x-2">
          <div className="h-12 w-12 bg-yellow-300"></div>
          <div className="space-y-0">
<p className="text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide  font-normal tracking-tight">Phone</p>
<p className=" text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide font-normal tracking-tight">+353 1552 4908</p>
</div>
</div>
            {/*2 */}

            <div className="flex items-center space-x-2">
<div className="h-12 w-12 bg-yellow-300"></div>
<div className="space-y-0">
<p className=" text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide font-normal tracking-tight">E-mail</p>
<p className="text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide font-normal tracking-tight">hello@earthly.ie</p>
</div>
</div>
            {/*3*/}

            <div className="flex items-center space-x-2">
<div className="h-12 w-12 bg-yellow-300"></div>{/* https://img.freepik.com/premium-psd/blue-house-icon-3d-rendering_207199-279.jpg?w=2000*/}

<div className="space-y-0">

<p className=" text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide font-normal tracking-tight">16 Liffey Ave, Valley Park</p>

<p className=" text-sm md:tracking-wide lg:text-2xl  lg:tracking-wide font-normal tracking-tight">Lucan, Co. Dublin, Ireland</p>
</div>
</div>
{/* <div>
  <p className="tet-4 items-cent-5476201-4602452.png' className="h-36 w-36 animate-waving-hand" alt='' />

  </div> */}
</div>




        </div>
      </div>
      {/* Right */}
     
      <div className="w-full md:w-2/3 lg:w-3/5 px-3 my-5">
      <div className="border rounded-full py-0 md:mx-0 lg:mx-20">
        <form>
          <div className="flex flex-col items-center space-y-10 pb-14 pt-32 md:pt-24 md:pb-6 ">
            <input
              name="email"
              type="email"
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
              placeholder="Your Messege"
></textarea>
          </div> 
         <div className="h-24 w-24 border hover:pl-2  hover:pt-2 rounded-full">
         <div className="h-20 w-20 rounded-full hover:scale-110  bg-yellow-300 flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold uppercase">Send</h1>
         </div>
         </div>
        </form>
        </div>
      </div>
    </div>
      
    );
};

export default Contact;
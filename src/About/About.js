import React from 'react';
import BottomAbout from './BottomAbout';
import LargeDevice from './LargeDevice';
import intro from '../assets/intro.png'

const About = () => {
    return (
        <div>
           <div className='flex -space-x-16 justify-center items-center '>
                <img src={intro} className='h-32 w-32' alt=' '/>
                <h1 className='text-4xl font-bold'>About Earthly</h1>
            </div>

            {/* for large device */}
<LargeDevice/>
           <div className='flex flex-col md:flex-row md:justify-around items-center my-10 xl:hidden'>

{/* left side */}
<div className='w-full md:w-1/2 px-7'>
    

    {/* for small device */}
    <div className='relative md:hidden'>
    <div className='bg-green-300 h-52 w-52 absolute left-16 -top-10'></div>
    <div className='bg-red-300 h-52 w-52'></div>
    </div>

    {/* left side */}
    <p className='text-xl font-medium'>It’s high time for all of us to think about our 
    impression and capacity to lessen the waste and its impacts on the climate. This must 
    be finished by settling on a responsible choice of utilizing eco-friendly products.
    Earthly Eco-friendly products like bamboo toothbrushes, bamboo straws, plant-based 
    coffee cups, and many sustainable products are items that are not unsafe to the climate.
      the market. The other alternatives are expensive and lack quality.</p>
</div>


{/* right side */}
<div  className='w-full md:w-2/3 relative hidden md:block'>
    <div className='bg-green-300 h-80 w-72 absolute md:-top-24 md:left-2 lg:-top-32 '></div>
    <div className='bg-red-300 h-72 w-72 absolute -top-52 right-7 lg:right-14 xl:-top-44'></div>
</div>
</div>


{/* bottom */}

<BottomAbout/>
        </div>
    );
};

export default About;
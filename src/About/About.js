import React from 'react';
import BottomAbout from './BottomAbout';
import LargeDevice from './LargeDevice';
import intro from '../assets/intro.png'
import brushed from '../assets/brushed.PNG'
import cuped from '../assets/cuped.PNG'
import AOS from 'aos'
import 'aos/dist/aos.css';

const About = () => {
    AOS.init()
    return (
        <div>
           <div className='flex -space-x-16 justify-center items-center mt-0 lg:mt-0 md:-mt-20'>
                <img src={intro} className='h-32 w-32' alt=' '/>
                <h1 className='text-2xl md:text-4xl font-bold'>About Earthly</h1>
            </div>

            {/* for large device */}
<LargeDevice/>
           <div className='flex flex-col md:flex-row md:justify-around items-center my-5 xl:hidden'>

{/* left side */}
<div className='w-full md:w-1/2 px-7'>
    

    {/* for small device */}
    <div className='relative md:hidden mb-3'>
        <img src={cuped} className='h-52 w-60 absolute left-16 -top-10' alt='brush'/>
        <img src={brushed} className='h-52 w-52' alt='brush'/>
    
    </div>

    {/* left side */}
    <p data-aos="fade-up-right" className='text-xl font-medium'>It’s high time for all of us to think about our 
    impression and capacity to lessen the waste and its impacts on the climate. This must 
    be finished by settling on a responsible choice of utilizing eco-friendly products.
    Earthly Eco-friendly products like bamboo toothbrushes, bamboo straws, plant-based 
    coffee cups, and many sustainable products are items that are not unsafe to the climate.
      the market. The other alternatives are expensive and lack quality.</p>
</div>


{/* right side */}
<div  className='w-full md:w-2/3 relative hidden md:block'>

    <img data-aos="fade-up-right" src={brushed} className='h-80 w-72 absolute md:-top-24 md:left-2 lg:-top-32' alt='brush'/>
    <img data-aos="fade-up-right" src={cuped} className='h-72 w-72 absolute -top-52 right-7 lg:right-14 xl:-top-44' alt='brush'/>

</div>
</div>


{/* bottom */}

<BottomAbout/>
        </div>
    );
};

export default About;
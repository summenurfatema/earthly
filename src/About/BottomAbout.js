import React from 'react';
import loffa from '../assets/loffa.PNG'
import kited from '../assets/kited.PNG'
import AOS from 'aos'
import 'aos/dist/aos.css';


const BottomAbout = () => {
AOS.init()
    return (
        <div>
                <div className='md:flex flex-col md:flex-row-reverse md:justify-around items-center my-10 hidden xl:hidden'>
 
{/* left side */}
<div className='w-full md:w-1/2 px-7'>


    {/* left side */}
    <p data-aos="fade-left" className='text-xl font-medium'>Enter Earthly, a spot for businesses that
     need to be a part of the green movement. We do an amazing job to give you the 
     information and alternative sustainable products for your cafes and food business.
      We’re endeavoring to set new principles, increase present expectations, and review what 
       is useful for your business and our planet. Each move you make as a business is a 
       chance to be better.</p>
</div>


{/* right side */}
<div  className='w-full md:w-2/3 relative'>
     <img data-aos="fade-up" src={kited} className='h-80 w-72 absolute md:-top-24 md:left-6' alt='kited'/>
     <img data-aos="fade-down"src={loffa} className='h-72 w-72 absolute -top-52 right-7 lg:-top-48' alt='loffa'/>

</div>
</div>
        </div>
    );
};

export default BottomAbout;
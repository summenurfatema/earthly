import React from 'react';
import kited from '../assets/kited.PNG'
import cuped from '../assets/cuped.PNG'
import loffa from '../assets/loffa.PNG'
const LargeDevice = () => {
    return (
        <div className='hidden xl:block'>
            <div className='flex justify-evenly my-10'>

<div className='w-2/5 px-9'>
<p className='text-xl font-medium'>It’s high time for all of us to think about our 
 and capacity to lessen the waste and its impacts on the climate. This must be 
  by settling on a responsible choice of utilizing eco-friendly products. Earthly 
  Eco-friendly products like bamboo toothbrushes, bamboo straws, plant-based coffee cups,
   and many sustainable products are items that are not unsafe to the climate. These are 
   items produced using sustainable and organic raw materials. Earthly products are of the
    best quality and in the best designs. What’s more, it’s shockingly easy to roll 
     sure improvements to your way of life just by sorting out where to begin. Rather than 
     utilizing a plastic cup, trade it for eco-friendly cups and eco-friendly containers. 
     Earthly organic products are the most affordable option in the market. The 
      alternatives are expensive and lack quality</p>
</div>
{/* pic */}
<div className='w-3/5 h-96 relative'>

     <img src={kited} className='h-80 w-80 absolute top-32' alt='brush'/>
     <img src={cuped} className='h-80 w-96 absolute top-16 left-60' alt='brush'/>
     <img src={loffa} className='h-80 w-80 absolute top-0 right-12' alt='brush'/>
</div>
                
            </div>
        </div>
    );
};
// 1   1    1   1   1   11    1   1   1   1   1   1   11  11   11  11  1 1 1 1 1 1 1 1 1 1  
export default LargeDevice;
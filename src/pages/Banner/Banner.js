import React from 'react';

const Banner = () => {
    return (
        <div>
<section class="text-gray-900 bg-white">
  <div className='h-28 mb-4 bg-red-300'></div>
  <div
    class="mx-auto max-w-screen-xl px-4 pt-12 pb-32 lg:flex h-[90vh] lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl  font-extrabold text-transparent  sm:text-5xl"
      >
        EARTHLY !!! 

        <span class="sm:block pl-4">We do an amazing job to give you the information and alternative sustainable products for your cafes and food business...</span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
     
      Earthly Eco-friendly products like bamboo toothbrushes, bamboo straws, plant-based coffee cups, and many sustainable products are items that are not unsafe to the climate.      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Buy Now
        </a>

        <a
          class="block w-full text-gray-800 rounded border border-blue-600 px-12 py-3 text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Explore More
        </a>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default Banner;
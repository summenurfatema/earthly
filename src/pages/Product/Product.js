import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper';
import intro from '../../assets/intro.png'
import brush from '../../assets/brush.PNG'
import cup1 from '../../assets/cup1.PNG'
import cup11 from '../../assets/cup11.PNG'
import kit1 from '../../assets/kit1.PNG'
import loofah from '../../assets/loofah.PNG'
import loofah2 from '../../assets/loofah2.PNG'
import straw1 from '../../assets/straw1.PNG'
import straw2 from '../../assets/straw2.PNG'
import straw3 from '../../assets/straw3.PNG'
// import Swiper and modules styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/grid";

// Import Swiper styles

import 'swiper/css';
import ProductCard from './ProductCard';


const Product = () => {
    const categories = [
        {
            'id': 1,
            'name': 'Plant Based Reusable Cups',
            'img': cup1,
            'price': 2.39
        },
        {
            'id': 2,
            'name': 'Sustainability Starter Kit',
            'img': kit1,
            'price': 10.99
        },
        {
            'id': 3,
            'name': 'Reusable Bamboo Straws',
            'img': straw1,
            'price': 1.09
        },
        {
            'id': 4,
            'name': 'Natural Bamboo Loofah',
            'img': loofah,
            'price': 2.99

        },
        {
            'id': 5,
            'name': 'Bamboo Toothbrush',
            'img': brush,
            'price': 3.59
        },
        {
            'id': 6,
            'name': 'Natural Bamboo Loofah',
            'img': loofah2,
            'price': 2.99
        },
        {
            'id': 7,
            'name': 'Reusable Bamboo Straws',
            'img': straw2,
            'price': 12.99
        },
        
         
        {
            'id': 8,
            'name': 'Sustainability Starter Kit',
            'img': kit1,
            'price': 6.99
        },
        {
            'id': 9,
            'name': 'Reusable Bamboo Straws',
            'img': straw3,
            'price':10.99
        }
    ]
  
        
    return (
        <div className='mb-10  md:mb-32 mt-16 md:mt-2 lg:mt-0'>

<div className='flex -space-x-16 justify-center items-center '>
                <img src={intro} className='h-32 w-32' alt=' '/>
                <h1 className='text-2xl md:text-4xl font-bold'>Our Product</h1>
            </div>
{/* mobile */}
<div className='lg:hidden px-5 md:px-10 md:h-[500px]'>
<Swiper
        effect={"flip"}
        grabCursor={true}
        //pagination={true}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
                            categories.map(newProduct =>
                                <SwiperSlide>
                                    <ProductCard newProduct={newProduct} />
                                </SwiperSlide>
                            )
                        }
        
      </Swiper>
      </div>
            {/*  */}
            <div className='lg:flex flex-row-reverse justify-evenly hidden'>

                <div className='w-[500px] mt-40'>

                    <Swiper
                        spaceBetween={3}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className='h-[500px] ' src={straw2} alt='' /></SwiperSlide>
                        <SwiperSlide><img className='h-[500px]' src={cup11} alt='' /></SwiperSlide>

                    </Swiper>
                </div>


                {/* new Arrival */}
                <div className='w-[800px] px-10'>
                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                            fill: "row",
                        }}
                        navigation={true}
                        spaceBetween={30}

                        modules={[Navigation, Grid, Pagination]}
                        className="mySwiper"
                    >
                        {
                            categories.map(newProduct =>
                                <SwiperSlide>
                                    <ProductCard newProduct={newProduct} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div >
        </div>






    );
};

export default Product;





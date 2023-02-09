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

import AOS from 'aos'
import 'aos/dist/aos.css';
// import Swiper and modules styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/grid";

// Import Swiper styles

import 'swiper/css';
import ProductCard from './ProductCard';


const Product = () => {
    AOS.init()
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
        <div className='mb-10  md:mb-32 mt-4 md:mt-12 lg:-mt-12 lg:mb-5'>

<div className='flex -space-x-16 justify-center items-center' data-aos="fade-down">
                <img src={intro} className='h-32 w-32' alt=' '/>
                <h1 className='text-2xl md:text-4xl font-bold' >Our Product</h1>
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
            <div className='lg:flex lg:flex-row-reverse lg:justify-evenly hidden'>

                <div className='w-[420px] h-[200px] mt-40 pr-10'  data-aos="fade-left">

                    <Swiper
                        spaceBetween={3}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        
                        <SwiperSlide><img className='h-[410px] ' src={straw2} alt='' /></SwiperSlide>
                        <SwiperSlide><img className='h-[410px]' src={cup11} alt='' /></SwiperSlide>

                    </Swiper>
                </div>


                {/* new Arrival */}
                <div className='w-[800px] px-10'  data-aos="fade-right">
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





import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper';
import img from '../../assets/intro.png'
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
            'name': 'WHITENING & BRIGHTENING',
            'img': img,
            'price': 400
        },
        {
            'id': 2,
            'name': 'WHITENING & BRIGHTENING',
            'img': img,
            'price': 499
        },
        {
            'id': 2,
            'name': 'OILY & AC SKIN CARE',
            'img': img,
            'price': 399
        },
        {
            'id': 3,
            'name': 'EXCLUSIVE SKIN CARE',
            'img': img,
            'price': 299

        },
        {
            'id': 4,
            'name': 'MOISTURIZER',
            'img': img,
            'price': 599
        },
        {
            'id': 5,
            'name': 'PREMIUM SKINCLINIC PRODUCTS',
            'img': img,
            'price': 499
        },
        {
            'id': 6,
            'name': 'DAILY SKIN CARE',
            'img': img,
            'price': 599
        },
        {
            'id': 7,
            'name': 'MATURE SKIN CARE',
            'img': img,
            'price': 599
        },
        {
            'id': 8,
            'name': 'HYPERPIGMENTATION, SPOT & SCAR',
            'img': img,
            'price': 699
        }
    ]
  
        
    return (
        <div className='bg-gray-100'>
            <div className='divider text-black px-20 py-12 '><span className=' border-2 border-brown px-4 py-3 text-xl'>Best Selling</span></div>
            <div className='flex flex-row-reverse justify-evenly'>

                <div className='w-[500px] mt-40'>

                    <Swiper
                        spaceBetween={3}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className='h-[500px] ' src={img} alt='' /></SwiperSlide>
                        <SwiperSlide><img className='h-[500px]' src={img} alt='' /></SwiperSlide>

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





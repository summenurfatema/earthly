import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero1 from '../../assets/hero1.png'
import AOS  from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
              <div className='w-[500px] mt-40'>

<Swiper
    spaceBetween={3}
    pagination={{
        clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
>
    <SwiperSlide data-aos="fade-left"><img className='h-[500px] mb-7 ' src={hero1} alt='' /></SwiperSlide>
    <SwiperSlide data-aos="fade-left"><img className='h-[500px] ' src={hero1} alt='' /></SwiperSlide>
   

</Swiper>
</div>



</div>
        
    );
};

export default Hero;
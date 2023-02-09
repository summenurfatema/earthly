import React from 'react';
import Footer from '../pages/Hero/Footer/Footer';
import Hero from '../pages/Hero/Hero';
import Contact from '../pages/Contact/Contact'
import Testimonial from '../pages/Testimonial/Testimonial';
import About from '../About/About';

const Main = () => {
    return (
        <div>
          <About/>
          <Testimonial/>
          <Contact/>
          <Footer/>
            
        </div>
    );
};

export default Main;
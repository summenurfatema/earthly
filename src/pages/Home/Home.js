import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import JoinGroup from '../JoinGroup/JoinGroup';
import News from '../News/News';
import Offer from '../Offer/Offer';
import Product from '../Product/Product';
import State from '../State/State';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Product/>
<About/>
<News/>
<Offer/>
<State/>
<Testimonial/>
<Contact/>
<JoinGroup/>
        </div>
    );
};

export default Home;
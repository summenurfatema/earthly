import React from 'react';
import About from '../../About/About';
import Contact from '../Contact/Contact';
import JoinGroup from '../JoinGroup/JoinGroup';
import News from '../News/News';
import Offer from '../Offer/Offer';
import State from '../State/State';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
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
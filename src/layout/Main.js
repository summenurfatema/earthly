import React from 'react';
import Footer from '../pages/Hero/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <Outlet></Outlet>
          <Footer/>
            
        </div>
    );
};

export default Main;
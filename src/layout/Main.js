import React from 'react';
import Footer from '../pages/Hero/Footer/Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Main = () => {
    return (
        <div>
          <NavBar/>
          <Outlet></Outlet>
          <Footer/>
            
        </div>
    );
};

export default Main;
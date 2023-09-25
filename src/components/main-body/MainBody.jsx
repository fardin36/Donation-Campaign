import React from 'react';
import Header from '../header/Header'
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const MainBody = () => {
    return (
        <div className='min-h-full'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainBody;
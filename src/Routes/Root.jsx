import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => (
    <div className="flex flex-col justify-between min-h-screen">
        <div className="">
            <Navbar />
            <div className='container bg-white min-h-screen pt-20'>
                <Outlet />
            </div>
        </div>
        <Footer />
    </div>
);

export default Root;

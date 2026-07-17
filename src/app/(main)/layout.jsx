import BraekingNews from '@/component/BraekingNews';
import Header from '@/component/Header';
import Navbar from '@/component/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <BraekingNews></BraekingNews>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;
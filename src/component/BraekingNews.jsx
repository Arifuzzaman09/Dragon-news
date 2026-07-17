import React from 'react';
import Marquee from 'react-fast-marquee';

const BraekingNews = () => {
    return (
        <div className='flex justify-between gap-4 container mx-auto bg-gray-200 py-4 px-2'>
            <button className='btn bg-red-900 text-white'>Latest News</button>
            <Marquee>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, reprehenderit ducimus deleniti praesentium blanditiis voluptatibus ad perferendis dolorem.</Marquee>
        </div>
    );
};

export default BraekingNews;
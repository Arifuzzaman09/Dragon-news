import React from 'react';
import Marquee from 'react-fast-marquee';

const news =
    [
        {
            "id": 1,
            "title": "Learn modern React development "
        },
        {
            "id": 2,
            "title": "Master JavaScript fundamentals through interactive"
        },
        {
            "id": 3,
            "title": "Build responsive websites using HTML CSS Tailwind and React"
        },
        {
            "id": 4,
            "title": "Understand backend development with Node Express"
        },
        {
            "id": 5,
            "title": "Create beautiful user interfaces with reusable"
        },
        {
            "id": 6,
            "title": "Improve coding skills by solving programming problems"
        },
        {
            "id": 7,
            "title": "Deploy full stack applications using modern"
        },
        {
            "id": 8,
            "title": "Explore Git and GitHub workflows for better"
        },
        {
            "id": 9,
            "title": "Develop professional portfolio projects"
        },
        {
            "id": 10,
            "title": "Start your web development career with dedication continuous"
        }
    ]

const BraekingNews = () => {
    return (
        <div className='flex justify-between gap-4 container mx-auto bg-gray-200 py-4 px-2'>
            <button className='btn bg-red-900 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {news.map(n=>{
                   return <span key={n.id} className='mx-6'> {n.title} </span>
                })}
            </Marquee>
        </div>
    );
};

export default BraekingNews;
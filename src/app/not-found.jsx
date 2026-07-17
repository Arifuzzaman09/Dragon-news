import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center my-auto space-y-2.5'>
            <h2 className='text-4xl text-purple-500 font-bold'>This Page is Not Found</h2>
           <Link href={'/'}> <button className='btn btn-primary'>Go Home</button></Link>
        </div>
    );
};

export default NotFound;
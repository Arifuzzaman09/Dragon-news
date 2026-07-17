import Link from 'next/link';
import React from 'react';
import userImg from '@/assets/user.png'
import Image from 'next/image';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center py-5'>
            <div></div>
            <ul className='flex justify-center gap-3'>
                <li><Navlink href={'/'}>Home</Navlink></li>
                <li><Navlink href={'/about'}>About</Navlink></li>
                <li><Navlink href={'/career'}>Career</Navlink></li>
            </ul>
            <div className='flex justify-center gap-2 items-center'>
                <Image src={userImg} alt={"user-img"} width={50} height={50}></Image>
                <button className='btn btn-primary'>
                    <Link href={"/login"}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
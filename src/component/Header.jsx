
import Logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-3 space-y-2'>
            <Image src={Logo} hight={200} wigth={300} alt="logo" className='mx-auto'></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),  " EEEE,MMM dd ,yyyy")}</p>
        </div>
    );
};

export default Header;
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/custom/Navbar';
import Footer from '@/components/custom/Footer';




const NavLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    );
}

export default NavLayout;

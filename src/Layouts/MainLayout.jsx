import React from 'react';
import NavBar from '../components/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main className='w-9/12 mx-auto'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;
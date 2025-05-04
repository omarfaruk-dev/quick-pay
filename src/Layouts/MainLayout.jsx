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
            <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;
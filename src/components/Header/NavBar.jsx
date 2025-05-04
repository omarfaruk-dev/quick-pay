import { useState } from 'react';
import { FaBars, FaBookReader, FaHistory, FaHome, FaMoneyBillWave, FaTimes, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import Button from '../ui/Button';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const links =
        <>
            <li><NavLink to='/' className="text-lg hover:text-yellow-300 transition flex items-center"><FaHome className="mr-2" /> Home</NavLink></li>
            <li><NavLink to='/bills' className="text-lg hover:text-yellow-300 transition flex items-center" ><FaMoneyBillWave className="mr-2" /> Bills</NavLink></li>
            <li><NavLink to='/history' className="text-lg hover:text-yellow-300 transition flex items-center"><FaUser className="mr-2" />My Profile</NavLink></li>
            <li><NavLink to='/blog' className="text-lg hover:text-yellow-300 transition flex items-center" ><FaBookReader className='mr-2' /> Blog</NavLink></li>
        </>

    return (
        <nav className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-yellow-300">⚡ Quick Pay</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-7 items-center">
                        {links}
                    </ul>

                    {/* Right Side Buttons */}
                    <div className="hidden md:flex space-x-3">
                        <Link to="/register"><Button label={"Register"}></Button></Link>
                        <Link to='/login'><Button label={"Login"}></Button></Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-gradient-to-b from-blue-700 to-purple-700">
                    {links}
                    <div className="pt-2 space-y-2">
                        <Button to="/register" label={"Register"}></Button>
                        <Link to='/login'><Button label={"Login"}></Button></Link>
                    </div>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;

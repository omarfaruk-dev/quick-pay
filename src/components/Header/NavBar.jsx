import { use, useEffect, useRef, useState } from 'react';
import { FaBars, FaBookReader, FaHome, FaMoneyBillWave, FaTimes, FaUser } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router';
import Button from '../ui/Button';
import { AuthContext } from '../../contexts/AuthContext';

const NavBar = () => {
    const { user, signOutUser, balance } = use(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const navigate = useNavigate();

    // user menu
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    //user menu close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    //signout user
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate('/')
                alert('Log Out Successfully!')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links =
        <>
            <li><NavLink to='/' className="text-lg hover:text-yellow-300 transition flex items-center"><FaHome className="mr-2" /> Home</NavLink></li>
            <li><NavLink to='/bills' className="text-lg hover:text-yellow-300 transition flex items-center" ><FaMoneyBillWave className="mr-2" /> Bills</NavLink></li>
            <li><NavLink to='/profile' className="text-lg hover:text-yellow-300 transition flex items-center"><FaUser className="mr-2" />My Profile</NavLink></li>
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

                    {
                        user ?
                            <div className="relative inline-block text-left ref={menuRef}">
                                {/* Profile Image Button */}
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="focus:outline-none"
                                >
                                    <img
                                        src={user?.photoURL}
                                        alt="User"
                                        className="w-12 h-12 rounded-full border-2 border-blue-700 shadow-sm"
                                    />
                                </button>

                                {/* User Dropdown Menu */}
                                {open && (
                                    <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg z-50 text-sm py-2">
                                        <Link
                                            to="/profile"
                                            className="text-base block px-4 py-2 text-blue-800 hover:bg-blue-50 hover:text-purple-700"
                                        >
                                            {user?.displayName}
                                        </Link>
                                        <p className="text-base block px-4 text-blue-800">Balance: <span className="font-bold text-green-600">{balance}</span></p>
                                        <button onClick={handleSignOut}
                                            className="text-base w-full text-left px-4 py-2 text-blue-800 hover:bg-blue-50 hover:text-purple-700"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                            :
                            <div className="hidden md:flex space-x-3">
                                <Link to="/register"><Button label={"Register"}></Button></Link>
                                <Link to='/login'><Button label={"Login"}></Button></Link>
                            </div>


                    }

                    {/* Right Side Buttons */}


                    {/* user menu */}



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

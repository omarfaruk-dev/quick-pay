import { use, useEffect, useRef, useState } from 'react';
import { FaBars, FaBookReader, FaHome, FaMoneyBillWave, FaSignOutAlt, FaTimes, FaUser } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router';
import Button from '../ui/Button';
import { AuthContext } from '../../contexts/AuthContext';
import { TbCoinTaka } from 'react-icons/tb';
import toast from 'react-hot-toast';
import { MdElectricBolt } from 'react-icons/md';

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
                toast.success('Log Out Successfully!')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage || 'Something went wrong!')
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
            <div className="max-w-7xl mx-auto px-4 md:px-4 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                    <Link to='/'><span className="flex items-center gap-1 text-2xl font-bold text-yellow-300"><MdElectricBolt size={30} color='#ffffff'/> Quick Pay</span></Link>  
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-4 lg:space-x-7 items-center">
                        {links}
                    </ul>
                    {
                        user ?
                            <div ref={menuRef} className="hidden relative md:inline-block text-left">
                                {/* Profile Image Button */}
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="focus:outline-none"
                                >
                                    {user?.photoURL ? (
                                        <img
                                            src={user?.photoURL}
                                            alt="User"
                                            className="w-12 h-12 rounded-full border-2 border-blue-700 shadow-sm"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-700 shadow-sm bg-gray-100 text-blue-700">
                                            <FaUser className="text-xl" />
                                        </div>
                                    )}
                                </button>

                                {/* User Dropdown Menu */}
                                {open && (
                                    <div className="absolute right-0 mt-1 w-44 bg-gradient-to-b from-blue-700 to-purple-700 border rounded-xl shadow-lg z-50 text-sm py-2">
                                        <Link onClick={() => setOpen(false)}
                                            to="/profile"
                                            className="text-lg font-bold block px-4 py-2 text-white hover:text-yellow-400"
                                        >
                                            {user?.displayName}
                                        </Link>
                                        <p className="text-lg px-4 text-white flex items-center gap-2">Balance: <span className="font-bold text-white flex items-center gap-1">{balance} <TbCoinTaka size={25} /></span></p>
                                        <button onClick={handleSignOut}
                                            className="text-lg cursor-pointer flex items-center gap-2 text-left px-4 py-2 text-white hover:text-yellow-400"
                                        >
                                            Logout <FaSignOutAlt />
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
                    {
                        user ?
                            <div className="border-t mt-5 pt-2">
                                <h3
                                    className="flex items-center gap-2 text-lg py-2 text-white hover:bg-blue-50"
                                >   {user ? <img src={user?.photoURL} className='w-10 h-10 rounded-full border-2 border-white' /> : <FaUser />}
                                    {user?.displayName}
                                </h3>
                                <h3 className="text-lg text-white flex items-center justify-left gap-2"><TbCoinTaka size={25} /> Balance: <span className="font-bold text-yellow-400"> {balance} BDT</span></h3>
                                <button onClick={handleSignOut}
                                    className="flex items-center gap-2 text-lg w-full py-3 text-white"
                                > <FaSignOutAlt />
                                    Logout
                                </button>
                            </div>
                            :
                            <div className="pt-2 space-y-2">
                                <Button to="/register" label={"Register"}></Button>
                                <Link to='/login'><Button label={"Login"}></Button></Link>
                            </div>
                    }
                </ul>
            )}
        </nav>
    );
};

export default NavBar;

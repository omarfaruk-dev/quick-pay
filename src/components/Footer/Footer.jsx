import { FaBookReader, FaHistory, FaHome, FaMoneyBillWave } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdOutlinePhone } from "react-icons/md";
import { NavLink } from "react-router";

const Footer = () => {
    const links =
        <>
            <li><NavLink to='/' className="text-lg hover:text-yellow-300 transition flex items-center"><FaHome className="mr-2" /> Home</NavLink></li>
            <li><NavLink to='/bills' className="text-lg hover:text-yellow-300 transition flex items-center" ><FaMoneyBillWave className="mr-2" /> Bills</NavLink></li>
            <li><NavLink to='/history' className="text-lg hover:text-yellow-300 transition flex items-center"><FaHistory className="mr-2" /> Payment History</NavLink></li>
            <li><NavLink to='/blog' className="text-lg hover:text-yellow-300 transition flex items-center" ><FaBookReader className='mr-2' /> Blog</NavLink></li>
        </>
    return (
        <footer className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Quick Pay</h3>
                        <p className=" text-white">
                            A simple and secure platform to pay your electricity, gas, and water and internet bills online—fast and hassle-free.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
                        <ul className="text-sm space-y-1">
                            {links}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Contact</h3>
                        <p className="text-white flex items-center gap-2 text-lg"><MdEmail /> support@quickpay.com</p>
                        <p className="text-white flex items-center gap-2 text-lg"><MdOutlinePhone /> +880 1234 567890</p>
                        <p className="text-white flex items-center gap-2 text-lg"><MdLocationOn />Dhaka, Bangladesh</p>
                    </div>
                </div>

                <hr className="my-6 border-blue-600" />

                <div className="text-center text-sm text-white">
                    &copy; {new Date().getFullYear()} Quick Pay. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// WhyChooseUs.jsx

import { FaGem, FaStopwatch, FaHandPointer, FaHeart } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12 bg-white">
      {/* Left Side - Title Circle */}
      <div className="bg-gradient-to-b from-blue-700 to-purple-700 text-white font-bold text-xl md:text-2xl rounded-full w-40 h-40 flex items-center justify-center shadow-lg">
        <div className="text-center">
          <p>WHY</p>
          <p>CHOOSE</p>
          <p>US</p>
        </div>
      </div>

      {/* Right Side - Feature Items */}
      <div className="space-y-6 max-w-2xl w-full">
        {/* Item 1 */}
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-purple-500 to-violet-600 text-white p-3 rounded-full shadow-lg">
            <FaGem className="text-xl" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900">Secure & Reliable</h4>
            <p className="text-sm text-gray-700">
              Quick Pay ensures your personal and billing data is protected using modern authentication and encryption through Firebase.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-3 rounded-full shadow-lg">
            <FaStopwatch className="text-xl" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900">Fast Transactions</h4>
            <p className="text-sm text-gray-700">
              Pay your bills instantly, anytime and anywhere. Real-time balance updates and payment status reduce waiting and errors.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-cyan-400 to-teal-500 text-white p-3 rounded-full shadow-lg">
            <FaHandPointer className="text-xl" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900">User Friendly</h4>
            <p className="text-sm text-gray-700">
              Intuitive UI/UX, responsive design, and simple navigation help all users—tech-savvy or not—pay bills with ease.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-gray-600 to-gray-800 text-white p-3 rounded-full shadow-lg">
            <FaHeart className="text-xl" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900">Trusted Nationwide</h4>
            <p className="text-sm text-gray-700">
              Quick Pay supports major billers including DESCO, NESCO, WASA, and more, making it a reliable choice across the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

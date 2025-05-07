import React from 'react';
import CountUp from 'react-countup';
import { FaRegSmileBeam, FaFileInvoiceDollar, FaHandshake, FaMobileAlt } from 'react-icons/fa';

const stats = [
  {
    title: 'Happy Users',
    end: 120000,
    suffix: '+',
    icon: <FaRegSmileBeam className="text-green-600 text-5xl mb-4" />,
  },
  {
    title: 'Bills Paid',
    end: 950000,
    suffix: '+',
    icon: <FaFileInvoiceDollar className="text-blue-700 text-5xl mb-4" />,
  },
  {
    title: 'Partner Services',
    end: 39,
    suffix: '+',
    icon: <FaHandshake className="text-purple-700 text-5xl mb-4" />,
  },
  {
    title: 'App Downloads',
    end: 30000,
    suffix: '+',
    icon: <FaMobileAlt className="text-yellow-500 text-5xl mb-4" />,
  },
];

const Counter = () => {
  return (
    <div className="bg-gradient-to-br from-[#fdfdfd] via-[#f9f9fb] to-[#f1f5f9] py-16 px-6 md:px-12">
      <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-12">Our Impact in Numbers</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white h-72 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300"
          >
            {stat.icon}
            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              <CountUp enableScrollSpy end={stat.end} duration={3} separator="," suffix={stat.suffix} />
            </h3>
            <p className="text-sm text-gray-600 mt-2">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;

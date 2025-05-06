import React from 'react';
import { FaShieldAlt, FaClock, FaUsers, FaGlobeAsia } from 'react-icons/fa';

const benefits = [
  {
    title: "Secure Transactions",
    description: "Your payments are encrypted and 100% protected from fraud.",
    icon: <FaShieldAlt className="text-green-600 text-5xl mb-4" />,
  },
  {
    title: "Fast Service",
    description: "Experience blazing fast bill payments and money transfers.",
    icon: <FaClock className="text-blue-600 text-5xl mb-4" />,
  },
  {
    title: "Trusted by Millions",
    description: "Millions across the country rely on our reliable services.",
    icon: <FaUsers className="text-purple-600 text-5xl mb-4" />,
  },
  {
    title: "Nationwide Access",
    description: "Use our services from any corner of Bangladesh, anytime.",
    icon: <FaGlobeAsia className="text-pink-500 text-5xl mb-4" />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-br from-[#fdfdfd] via-[#f9f9fb] to-[#f1f5f9] py-16 px-6 md:px-12">
      <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white h-72 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300"
          >
            {benefit.icon}
            <h3 className="text-xl font-semibold text-gray-800 mt-2">{benefit.title}</h3>
            <p className="text-sm text-gray-600 mt-3">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

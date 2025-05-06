import React, { useState } from 'react';
import { FaMobileAlt, FaGooglePlay, FaApple, FaTablet, FaDesktop } from 'react-icons/fa';

const MultiPlatformSupport = () => {
    const [activeTab, setActiveTab] = useState('mobile');

    const tabData = {
        mobile: {
            title: 'Quick Pay Mobile App',
            description:
                'Manage your bills, send money, and track transactions all from our powerful mobile app — available on Android and iOS.',
            img: 'https://www.bkash.com/images/04_Available-on-Multiple-Platforms_web.webp',
            buttons: (
                <div className="flex gap-4 mt-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition">
                        <FaGooglePlay />
                        Google Play
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition">
                        <FaApple />
                        App Store
                    </button>
                </div>
            ),
        },
        ussd: {
            title: 'Quick Pay From Tablet',
            description:
                'Login to our secure web portal using your tablet to make payments, manage your account, and view reports — all from your browser.',
            img: 'https://www.bkash.com/images/04_Available-on-Multiple-Platforms_web.webp',
            buttons: null,
        },
        web: {
            title: 'Quick Pay Web Platform',
            description:
                'Login to our secure web portal to make payments, manage your account, and view reports — all from your browser.',
            img: 'https://www.bkash.com/images/04_Available-on-Multiple-Platforms_web.webp',
            buttons: null,
        },
    };

    const tabs = [
        { key: 'mobile', label: 'Mobile', icon: <FaMobileAlt /> },
        { key: 'ussd', label: 'Tablet', icon: <FaTablet /> },
        { key: 'web', label: 'Desktop', icon: <FaDesktop /> },
    ];

    const { title, description, img, buttons } = tabData[activeTab];

    return (
        <div className="bg-[#f5f7fa] py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                    Access Quick Pay Anywhere
                </h2>

                <div className="flex justify-center mb-8">
                    <div className="flex rounded-full shadow border border-blue-700 overflow-hidden bg-white">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                className={`px-6 py-2 flex items-center gap-2 font-medium text-sm transition ${activeTab === tab.key
                                        ? 'bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white'
                                        : 'text-gray-700 hover:bg-blue-100'
                                    }`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.icon} {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 transition-all">
                    <div className="md:w-1/2">
                        <img src={img} alt={title} className="rounded-xl w-full shadow-md" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
                        <p className="text-gray-600 text-base">{description}</p>
                        {buttons}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiPlatformSupport;

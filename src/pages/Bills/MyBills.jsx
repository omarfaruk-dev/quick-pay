import React, { useState } from 'react';
import { FaBolt, FaFire, FaRegCreditCard, FaTv, FaUniversity, FaWifi } from 'react-icons/fa';
import { IoWater } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router';

const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
};

const getBillIcon = (type) => {
    const lowerType = type.toLowerCase();

    if (lowerType === 'electricity') return <FaBolt className="text-yellow-500 text-xl" />;
    if (lowerType === 'water') return <IoWater className="text-blue-500 text-xl" />;
    if (lowerType === 'gas') return <FaFire className="text-red-500 text-xl" />;
    if (lowerType === 'tuition') return <FaUniversity className="text-green-600 text-xl" />;
    if (lowerType === 'internet') return <FaWifi className="text-indigo-500 text-xl" />;
    if (lowerType === 'creditcard') return <FaRegCreditCard className="text-green-500 text-xl" />;
    if (lowerType === 'satellitetv') return <FaTv className="text-blue-400 text-xl" />;
    return null;
};

const billTypes = ['All Bills', 'Electricity', 'Gas', 'Water', 'Internet', 'Tuition', 'CreditCard', 'SatelliteTv'];

const MyBills = () => {
    const bills = useLoaderData();

    // Filter state
    const [selectedType, setSelectedType] = useState('All Bills');

    const filteredBills = selectedType === 'All Bills'
        ? bills
        : bills.filter(bill => bill.bill_type.toLowerCase() === selectedType.toLowerCase());

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center px-4">
            <div className="w-full p-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">My Bills</h2>

                {/* Dropdown Filter */}
                <div className="flex justify-center mb-8">
                    <select
                        className="border-2 border-blue-700 rounded-md px-4 py-2 text-blue-700 font-medium focus:outline-none"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        {billTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {/* Bill List */}
                <div className="space-y-5">
                    {filteredBills.length === 0 ? (
                        <p className="text-center text-red-500">No bills found for selected type.</p>
                    ) : (
                        filteredBills.map(bill => (
                            <div
                                key={bill.id}
                                className="flex flex-col md:flex-row items-center justify-between space-y-2 p-4 rounded-xl shadow-md border border-blue-700"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-4">
                                    <div className="relative bg-blue-100 p-1 rounded-lg">
                                        <img src={bill.icon} alt={bill.bill_type} className="w-40 h-40 object-contain rounded-lg shadow" />
                                        <div className="absolute -bottom-2 -right-2 bg-blue-100 p-2 rounded-lg">
                                            {getBillIcon(bill.bill_type)}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl text-blue-900">{bill.organization}</h3>
                                        <p className="text-base text-blue-600 italic">{bill.bill_type}</p>
                                    </div>
                                </div>
                                <div className="text-right text-sm">
                                    <p className="text-blue-800 text-base">
                                        <span className="font-medium">Amount:</span> {bill.amount}
                                    </p>
                                    <p className="text-blue-800 text-base">
                                        <span className="font-medium">Due:</span> {formatDate(bill["due-date"])}
                                    </p>
                                </div>
                                <Link to={`/bills/${bill.id}`}>
                                    <button className="ml-4 text-lg bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-3xl font-medium transition">
                                        Pay Bill
                                    </button>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBills;

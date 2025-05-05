import React from 'react';
import { FaBolt, FaRegCreditCard, FaUniversity, FaWifi } from 'react-icons/fa';
import { GiGasStove } from 'react-icons/gi';
import { IoWater } from 'react-icons/io5';
import { MdLiveTv } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';

const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
};


const getBillIcon = (type) => {
    const lowerType = type.toLowerCase();

    if (lowerType === 'electricity') {
        return <FaBolt className="text-yellow-500 text-xl" />;
    } else if (lowerType === 'water') {
        return <IoWater className="text-blue-500 text-xl" />;
    } else if (lowerType === 'gas') {
        return <GiGasStove className="text-red-500 text-xl" />;
    } else if (lowerType === 'tuition') {
        return <FaUniversity className="text-green-600 text-xl" />;
    } else if (lowerType === 'internet') {
        return <FaWifi className="text-indigo-500 text-xl" />;
    } else if (lowerType === 'creditcard') {
        return <FaRegCreditCard  className="text-green-500 text-xl"/>;
    } else if (lowerType === 'satellitetv') {
        return <MdLiveTv  className="text-blue-400 text-xl"/>;
    }
    
    else {
        return null;
    }
};

const MyBills = () => {

    const bills = useLoaderData();

    return (
        <div className="flex items-center justify-center px-4">
            <div className=" w-full p-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">My Bills</h2>
                <div className="space-y-5">
                    {bills.map(bill => (
                        <div
                            key={bill.id}
                            className="flex flex-col md:flex-row items-center justify-between space-y-2 p-4 rounded-xl shadow-md border border-blue-700"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="relative bg-blue-100 p-1 rounded-lg">
                                    <img src={bill.icon} alt={bill.bill_type} className="w-40 h-40 object-contain rounded-lg shadow" />
                                    <div className="absolute bottom-3 right-3 bg-white p-1 rounded-lg shadow-md">
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
                                    <span className=" font-medium">Amount:</span> {bill.amount}
                                </p>
                                <p className="text-blue-800 text-base">
                                    <span className=" font-medium">Due:</span> {formatDate(bill["due-date"])}
                                </p>
                            </div>
                            <Link to={`/bills/${bill.id}`} ><button className="ml-4 text-lg bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-3xl font-medium transition">
                                Pay Bill
                            </button></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBills;
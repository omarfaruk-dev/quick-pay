import React from 'react';
import { Link, useLoaderData } from 'react-router';

const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
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
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <img src={bill.icon} alt={bill.bill_type} className="w-30 h-30 object-contain rounded-lg shadow" />
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
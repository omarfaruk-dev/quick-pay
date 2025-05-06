import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { FaBolt, FaCheck, FaFire, FaRegCreditCard, FaTv, FaUniversity, FaWifi } from 'react-icons/fa';
import { IoWater } from 'react-icons/io5';

const getBillIcon = (type) => {
  const lowerType = type.toLowerCase();

  if (lowerType === 'electricity') {
    return <FaBolt className="text-yellow-500 text-2xl" />;
  } else if (lowerType === 'water') {
    return <IoWater className="text-blue-500 text-2xl" />;
  } else if (lowerType === 'gas') {
    return <FaFire className="text-red-500 text-2xl" />;
  } else if (lowerType === 'tuition') {
    return <FaUniversity className="text-green-600 text-2xl" />;
  } else if (lowerType === 'internet') {
    return <FaWifi className="text-indigo-500 text-2xl" />;
  } else if (lowerType === 'creditcard') {
    return <FaRegCreditCard className="text-green-500 text-2xl" />;
  } else if (lowerType === 'satellitetv') {
    return <FaTv className="text-blue-400 text-xl" />;
  } else {
    return null;
  }
};

const BillDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const bills = useLoaderData();
  const { user, balance, setBalance } = useContext(AuthContext);

  const bill = bills.find(b => b.id === parseInt(id));
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    if (user && bill) {
      const paidBills = JSON.parse(localStorage.getItem(`paidBills_${user.uid}`)) || [];
      setIsPaid(paidBills.includes(bill.id));
    }
  }, [user, bill]);

  if (!bill) {
    return <p className="text-center text-red-500">Bill not found.</p>;
  }

  const formattedDate = new Date(bill['due-date']).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const handlePay = () => {
    if (!user) {
      alert('Please log in to pay.');
      return;
    }
    if (isPaid) {
      alert('Already Paid')
      return;
    }

    const paidBillsKey = `paidBills_${user.uid}`;
    const paidBills = JSON.parse(localStorage.getItem(paidBillsKey)) || [];

    if (paidBills.includes(bill.id)) {
      alert('You have already paid this bill.');
      return;
    }

    if (balance < bill.amount) {
      alert('Insufficient balance!');
      return;
    }

    // Deduct balance
    setBalance(prev => prev - bill.amount);

    // Store paid bill ID
    paidBills.push(bill.id);
    localStorage.setItem(paidBillsKey, JSON.stringify(paidBills));

    setIsPaid(true);
    alert('Bill paid successfully!');
    navigate('/bills')
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 min-h-[calc(100vh-361px)] flex items-center justify-center px-4 py-8 bg-white">
      <title>Bill Payment | Details</title>
      <div className="md:flex  items-center bg-white rounded-xl shadow-lg max-w-3xl w-xl overflow-hidden border border-blue-100">
        {/* Left side - Icon */}
        <div className="relative bg-white flex items-center justify-center p-4">
          <img src={bill.icon} alt={`${bill.bill_type} icon`} className="w-50 lg:w-60 lg:h-60 border-2 border-blue-700 rounded-xl object-contain" />
          <div className="absolute bottom-5 right-5 bg-blue-100 p-2 rounded-lg ">
            {getBillIcon(bill.bill_type)}
          </div>
        </div>

        {/* Right side - Info */}
        <div className="text-center md:text-left p-6 space-y-2 text-blue-800">
          <h2 className="text-xl font-bold">{bill.organization}</h2>
          <p className="italic capitalize text-sm text-indigo-700">{bill.bill_type}</p>
          <p className="text-sm font-medium">Amount: <span className="font-bold">{bill.amount}</span></p>
          <p className="text-sm font-medium">Due Date: <span>{formattedDate}</span></p>
          <p className="text-sm font-medium flex items-center gap-2">Payment Status: {isPaid ? (
            <span className="text-green-600 font-semibold flex items-center gap-1">
              Paid <FaCheck />
            </span>
          ) : (
            <span className="text-red-600 font-semibold">Unpaid</span>
          )}</p>

          {isPaid ? (
            <button
              onClick={handlePay}
              className="mt-4 px-5 py-2 bg-gray-300 text-white rounded-3xl hover:from-purple-700 hover:to-blue-700 transition font-semibold"
            >
              Already Paid
            </button>
          ) : (
            <button
              onClick={handlePay}
              className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white rounded-3xl hover:from-purple-700 hover:to-blue-700 transition font-semibold"
            >
              Pay Bill
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillDetails;

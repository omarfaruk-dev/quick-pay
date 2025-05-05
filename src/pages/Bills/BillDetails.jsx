import { useParams, useLoaderData } from 'react-router';

const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
};


const BillDetails = () => {
    const { id } = useParams();
    const bills = useLoaderData(); // get all bills from loader
    const bill = bills.find(b => b.id === parseInt(id));
    // console.log(id, bill);
    if (!bill) {
        return <p className="text-center text-red-500">Bill not found.</p>;
    }

    const formattedDate = new Date(bill['due-date']).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });

    return (
        // <div className="min-h-screen flex items-center justify-center px-4 bg-blue-50">
        //     <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8">
        //         <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
        //             Bill Details {bill.id}
        //         </h2>
        //         <div className="space-y-3 text-blue-800 text-sm">
        //             <p><strong>Organization:</strong> {bill.organization}</p>
        //             <p><strong>Type:</strong> {bill.bill_type}</p>
        //             <p><strong>Amount:</strong> {bill.amount}</p>
        //             <p><strong>Due Date:</strong> {formatDate(bill["due-date"])}</p>
        //         </div>
        //     </div>
        // </div>
        <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-white">
        <div className="flex bg-white rounded-xl shadow-lg max-w-3xl w-full overflow-hidden border border-blue-100">
          {/* Left side - Icon */}
          <div className="w-1/3 bg-white flex items-center justify-center p-4">
            <img src={bill.icon} alt={`${bill.bill_type} icon`} className="w-60 h-60 object-contain" />
          </div>
  
          {/* Right side - Info */}
          <div className="w-2/3 p-6 space-y-2 text-blue-800">
            <h2 className="text-xl font-bold">{bill.organization}</h2>
            <p className="italic capitalize text-sm text-indigo-700">{bill.bill_type}</p>
            <p className="text-sm font-medium">Amount: <span className="font-bold">{bill.amount}</span></p>
            <p className="text-sm font-medium">Due Date: <span>{formattedDate}</span></p>
            <button className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white rounded-3xl hover:from-purple-700 hover:to-blue-700 transition font-semibold">
              Pay Bill
            </button>
          </div>
        </div>
      </div>
    );
};

export default BillDetails;

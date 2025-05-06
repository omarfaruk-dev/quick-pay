import { FaUser, FaMedal, FaTools, FaHeart } from "react-icons/fa";
import CountUp from "react-countup";

const stats = [
  {
    icon: <FaUser className="text-4xl text-purple-600" />,
    count: 7000,
    label: "Active Subscriptions",
  },
  {
    icon: <FaMedal className="text-4xl text-yellow-500" />,
    count: 52802,
    label: "5-Star Reviews",
  },
  {
    icon: <FaTools className="text-4xl text-green-500" />,
    count: 21000,
    label: "Tools Supported",
  },
  {
    icon: <FaHeart className="text-4xl text-pink-500" />,
    count: 102098,
    label: "Happy Users",
  },
];

const Counter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#f5f7ff] to-[#f5f7ff] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">
        We Power Modern Subscriptions
      </h2>
      <p className="text-gray-600 mb-10">
        Trusted by tech users and developers worldwide. We simplify how you manage your tools.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {stats.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp end={item.count} duration={2} separator="," />+
            </h3>
            <p className="text-gray-500 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;

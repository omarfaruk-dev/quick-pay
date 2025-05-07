import { Link } from "react-router";

const partnerLogos = [
    {
        name: 'bKash',
        url: 'https://i.ibb.co.com/HT5cQndj/bkash.png',
    },
    {
        name: 'Nagad',
        url: 'https://i.ibb.co.com/MybLyYYH/nagad.png',
    },
    {
        name: 'Rocket',
        url: 'https://i.ibb.co.com/d0tZscJm/rocket.png',
    },
    {
        name: 'Mcash',
        url: 'https://i.ibb.co.com/MD6Ws5Jj/mcash.png',
    },
    {
        name: 'Upay',
        url: 'https://i.ibb.co.com/RZFDMYj/upay.png',
    },
    {
        name: 'Visa Card',
        url: 'https://i.ibb.co.com/w8SrpFg/visa.png',
    },
    {
        name: 'Cellfin',
        url: 'https://i.ibb.co.com/JLCj0HN/cellfin.png',
    },
    {
        name: 'CityPay',
        url: 'https://i.ibb.co.com/zVKfmK37/citytouch.png',
    },
    {
        name: 'iPay',
        url: 'https://i.ibb.co.com/SwyRdx89/ipay.png',
    },
];

const OurPartners = () => {
    return (
        <section className="max-w-7xl mx-auto bg-white py-12 lg:py-30 px-6 md:px-20">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                {/* Logos Left */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full lg:w-1/2">
                    {partnerLogos.map((partner, idx) => (
                        <div
                            key={idx}
                            className="bg-blue-50 hover:bg-gray-100 transition p-4 rounded-lg shadow flex items-center justify-center h-24"
                        >
                            <img
                                src={partner.url}
                                alt={partner.name}
                                className="h-20 object-contain transform transition-all duration-300 ease-in-out hover:grayscale hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* Text Right */}
                <div className="flex-1 lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
                    <p className="text-gray-600 mb-6 max-w-md">
                        Quick Pay is backed by a growing network of trusted financial and service providers. From mobile payments to credit cards, we partner with the best to deliver secure, seamless, and fast bill payment experiences.
                    </p>
                    <a href='#blog'>
                    <button
                        type="submit"
                        className="mt-2 px-6  text-lg cursor-pointer bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 hover:bg-gradient-to-l hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 text-white py-2 rounded-3xl font-semibold transition"
                    >
                        View Customer Stories
                    </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;

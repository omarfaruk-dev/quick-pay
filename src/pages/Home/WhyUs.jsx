// WhyUs.jsx
import { FaGem, FaStopwatch, FaHandPointer, FaHeart } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: FaGem,
    bgColor: 'bg-gradient-to-br from-purple-500 to-blue-600',
    title: 'Secure & Reliable',
    description: 'Quick Pay ensures your personal and billing data is protected using modern authentication and encryption through Firebase.',
  },
  {
    id: 2,
    icon: FaStopwatch,
    bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-400',
    title: 'Fast Transactions',
    description: 'Pay your bills instantly, anytime and anywhere. Real-time balance updates and payment status reduce waiting and errors.',
  },
  {
    id: 3,
    icon: FaHandPointer,
    bgColor: 'bg-gradient-to-br from-green-400 to-blue-700',
    title: 'User Friendly',
    description: 'Intuitive UI/UX, responsive design, and simple navigation help all users tech savvy or not pay bills with ease.',
  },
  {
    id: 4,
    icon: FaHeart,
    bgColor: 'bg-gradient-to-br from-yellow-400 to-blue-700',
    title: 'Trusted Nationwide',
    description: 'Quick Pay supports major billers including DESCO, NESCO, WASA, and more, making it a reliable choice across the country.',
  },
];

const WhyUs = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-8">
        
        <div className="w-full lg:w-5/12 xl:w-4/12 flex-shrink-0 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] lg:w-[380px] lg:h-[380px]">
            <div className="absolute inset-0 bg-blue-50 rounded-full shadow-lg">
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 
                          w-[55%] sm:w-[50%] 
                          translate-x-[-25%] sm:translate-x-[-20%] md:translate-x-[-15%] lg:translate-x-[-10%]
                          text-blue-900 text-[11px] leading-snug 
                          sm:text-xs sm:leading-normal 
                          md:text-sm md:leading-relaxed">
                <p>Experience secure, fast, and user-friendly bill payments anytime, anywhere.</p>
                <p className="mt-1 sm:mt-2">Quick Pay connects you with trusted billers nationwide for seamless transactions.</p>
              </div>
            </div>
            <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 
                            -translate-x-[30%] sm:-translate-x-[28%] md:-translate-x-[25%]
                            w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52
                            bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700 text-white
                            rounded-full flex items-center justify-center text-center shadow-xl z-10`}>
              <div className="font-bold text-lg sm:text-xl md:text-2xl leading-tight">
                WHY<br />CHOOSE<br />US
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 xl:w-8/12 lg:pl-10 xl:pl-16 flex flex-col justify-center">
            {features.map((feature, index) => {
                let itemSpecificClasses = "";
                let marginTopClass = "";

                if (features.length === 4) {
                    switch (index) {
                        case 0: 
                            itemSpecificClasses = "lg:translate-x-0";
                            marginTopClass = "lg:mt-0"; 
                            break;
                        case 1:
                            itemSpecificClasses = "lg:translate-x-6 xl:translate-x-10";
                            marginTopClass = "mt-8 md:mt-8 lg:mt-6"; 
                            break;
                        case 2: 
                            itemSpecificClasses = "lg:translate-x-6 xl:translate-x-10";
                            marginTopClass = "mt-6 md:mt-6 lg:mt-4"; 
                            break;
                        case 3: 
                            itemSpecificClasses = "lg:translate-x-0";
                            marginTopClass = "mt-8 md:mt-8 lg:mt-6"; 
                            break;
                        default:
                            marginTopClass = "mt-8 md:mt-10"; 
                    }
                } else { 
                    marginTopClass = index === 0 ? "lg:mt-0" : "mt-8 md:mt-10";
                }

                return (
                    <div key={feature.id} className={`flex items-start gap-3 sm:gap-4 relative ${itemSpecificClasses} ${marginTopClass}`}>
                        
                        <div className={`hidden lg:block absolute top-[18px] sm:top-[22px] 
                                         left-[-2rem] xl:left-[-3.5rem]
                                         w-6 xl:w-12 h-px bg-gray-300 z-0`}></div>
                        
                       
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-md z-10 ${feature.bgColor}`}>
                            <feature.icon className="text-xl sm:text-2xl" />
                        </div>
                        
                       
                        <div className="flex-grow pt-px sm:pt-0.5">
                            <h4 className="font-semibold text-blue-900 text-base sm:text-lg md:text-xl">
                                {feature.title}
                            </h4>
                            <p className="text-sm sm:text-base text-gray-700 mt-1">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
import React from 'react';
import ServiceCarousel from './ServiceCarousel';
import WhyChooseUs from './WhyChooseUs';
import MultiPlatformSupport from './MultiPlatformSupport';
import TopBillersSlider from './TopBillersSlider';
import HeaderSlider from './HeaderSlider';

const Home = () => {
    return (
        <main>
            <HeaderSlider/>
            {/* <TopBillersSlider/> */}

            <section>
                <MultiPlatformSupport />
            </section>
            <ServiceCarousel />
            <div>
                <WhyChooseUs />
            </div>

        </main>
    );
};

export default Home;
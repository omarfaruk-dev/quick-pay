import React from 'react';
import ServiceCarousel from './ServiceCarousel';
import WhyChooseUs from './WhyChooseUs';
import MultiPlatformSupport from './MultiPlatformSupport';
// import TopBillersSlider from './TopBillersSlider';
import HeaderSlider from './HeaderSlider';
import Counter from './Counter';

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
                <Counter/>
            </div>

        </main>
    );
};

export default Home;
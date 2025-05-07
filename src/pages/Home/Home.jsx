import React from 'react';
import ServiceCarousel from './ServiceCarousel';
import WhyChooseUs from './WhyChooseUs';
import MultiPlatformSupport from './MultiPlatformSupport';
// import TopBillersSlider from './TopBillersSlider';
import HeaderSlider from './HeaderSlider';
import Counter from './Counter';
import LatestBlogs from './LatestBlogs';
import WhyUs from './WhyUs';
// import WhyUs from './WhyUs';

const Home = () => {
    return (
        <main>
            <HeaderSlider />
            <section>
                <WhyUs/>
                {/* <WhyUs/> */}
            </section>
            <section>
                {/* <WhyChooseUs /> */}
            </section>
            <section>
                <MultiPlatformSupport />
            </section>
            <section>
            <ServiceCarousel />
            </section>
            <section>
                <LatestBlogs/>
            </section>
            <section>
                <Counter />
            </section>

        </main>
    );
};

export default Home;
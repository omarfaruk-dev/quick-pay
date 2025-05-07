import React from 'react';
import ServiceCarousel from './ServiceCarousel';
import MultiPlatformSupport from './MultiPlatformSupport';
import HeaderSlider from './HeaderSlider';
import Counter from './Counter';
import LatestBlogs from './LatestBlogs';
import WhyUs from './WhyUs';
import OurPartners from './OurPartners';

const Home = () => {
    return (
        <main>
            <HeaderSlider />
            <section>
                <OurPartners />
                <WhyUs />
            </section>
            <section>
            </section>
            <section>
                <MultiPlatformSupport />
            </section>
            <section>
                <ServiceCarousel />
            </section>
            <section>
                <LatestBlogs />
            </section>
            <section>
                <Counter />
            </section>

        </main>
    );
};

export default Home;
import React from 'react';
import ServiceCarousel from './ServiceCarousel';
import WhyChooseUs from './WhyChooseUs';
import MultiPlatformSupport from './MultiPlatformSupport';

const Home = () => {
    return (
        <main>

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
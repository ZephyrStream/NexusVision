import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Channels from '../components/Channels';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import DownloadSection from '../components/DownloadSection';
import FAQ from '../components/FAQ';
import TrustedBy from '../components/TrustedBy';
import AnimatedSection from '../components/AnimatedSection';

interface HomePageProps {
    onTrialClick: () => void;
    onSpinWheelClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onTrialClick, onSpinWheelClick }) => {
    return (
        <>
            <Hero onTrialClick={onTrialClick} onSpinWheelClick={onSpinWheelClick} />
            <AnimatedSection>
                <TrustedBy />
            </AnimatedSection>
            <AnimatedSection>
                <Features />
            </AnimatedSection>
            <AnimatedSection>
                <Pricing />
            </AnimatedSection>
            <AnimatedSection>
                <Channels />
            </AnimatedSection>
            <AnimatedSection>
                <HowItWorks />
            </AnimatedSection>
            <AnimatedSection>
                <Testimonials />
            </AnimatedSection>
            <AnimatedSection>
                <DownloadSection />
            </AnimatedSection>
            <AnimatedSection>
                <FAQ />
            </AnimatedSection>
        </>
    );
};

export default HomePage;

import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Choose Your Plan',
        description: 'Select the subscription that fits your needs. Get bigger discounts on longer plans.',
        icon: (
            <svg className="w-12 h-12 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
        )
    },
    {
        number: '02',
        title: 'Get Credentials',
        description: 'Receive your login details instantly via email and WhatsApp after your order is confirmed.',
        icon: (
             <svg className="w-12 h-12 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        )
    },
    {
        number: '03',
        title: 'Start Watching',
        description: 'Use our easy-to-follow guides to install the app on any device and start streaming in minutes.',
        icon: (
            <svg className="w-12 h-12 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        )
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-20 bg-brand-black">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get Started in 3 Simple Steps</h2>
                <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto">We've made the process incredibly simple. You'll be watching your favorite shows in no time.</p>
                <div className="relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-light-gray/50 -translate-y-1/2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {steps.map((step) => (
                            <div key={step.number} className="bg-brand-gray p-8 rounded-xl border border-brand-light-gray/50 z-10 text-left">
                                <div className="flex items-start justify-between mb-4">
                                    {step.icon}
                                    <span className="text-6xl font-black text-brand-light-gray/30">{step.number}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

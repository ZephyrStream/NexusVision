import React from 'react';
import { pricingPlans } from '../constants/plans';

interface PricingCardProps {
    plan: {
        name: string;
        price: string;
        duration: string;
        features: string[];
        popular: boolean;
        cta: string;
    };
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
    const isPopular = plan.popular;

    return (
        <div className={`relative bg-brand-gray border-2 ${isPopular ? 'border-brand-red shadow-[0_0_15px_rgba(229,9,20,0.5)]' : 'border-brand-light-gray'} rounded-xl p-8 flex flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${isPopular ? 'hover:shadow-[0_0_25px_rgba(229,9,20,0.7)]' : 'hover:shadow-brand-red/20'}`}>
            {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                <span className="text-gray-400 text-lg"> / {plan.duration}</span>
            </div>
            <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <button className={`w-full font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 ${isPopular ? 'bg-brand-red text-white hover:bg-brand-red-dark' : 'bg-brand-light-gray text-white hover:bg-gray-600'}`}>
                {plan.cta}
            </button>
        </div>
    );
};

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20 bg-brand-black">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Choose Your Perfect Plan</h2>
                <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">Simple, transparent pricing. No hidden fees. More savings on longer plans. All features included in every plan.</p>
                <div className="inline-block bg-yellow-400/10 border border-yellow-500 text-yellow-300 font-semibold py-2 px-5 rounded-lg mb-12">
                    LIMITED TIME: Get an extra month FREE on all yearly plans!
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>
                 <div className="mt-16 bg-brand-gray/50 p-6 rounded-lg border border-brand-light-gray max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">Secure & Flexible Payments</h3>
                    <p className="text-gray-300 mb-6">We accept a wide range of payment methods for your convenience, including major credit cards, PayPal, and cryptocurrencies. Your transaction is 100% secure.</p>
                    <div className="flex justify-center items-center space-x-4">
                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-8"/>
                        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-8"/>
                        <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" className="h-8"/>
                        <img src="https://img.icons8.com/color/48/000000/bitcoin.png" alt="Bitcoin" className="h-8"/>
                        <img src="https://img.icons8.com/color/48/000000/ethereum.png" alt="Ethereum" className="h-8"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
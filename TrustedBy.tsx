import React from 'react';

const partners = [
    'TechPulse', 'Stream Weekly', 'Future Vision', 'Digital Hub', 'Global Streamer'
];

const TrustedBy: React.FC = () => {
    return (
        <div className="bg-brand-black py-12 sm:py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-400">
                    As featured in
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {partners.map(partner => (
                        <div key={partner} className="col-span-1 text-center">
                            <span className="text-gray-500 font-bold text-xl italic opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                                {partner}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;

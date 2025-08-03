
import React from 'react';
import { featuresData } from '../constants/features';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-brand-gray p-6 rounded-xl border border-brand-light-gray/50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-red/10">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-red/10 mb-5 border-2 border-brand-red/30">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const Features: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-brand-black">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Why StreamNova is a Cut Above</h2>
                <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">We've engineered every aspect of our service for an unmatched viewing experience. Here's what sets us apart.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <FeatureCard 
                            key={index}
                            icon={feature.icon} 
                            title={feature.title} 
                            description={feature.description} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

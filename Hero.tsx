import React from 'react';

interface HeroProps {
    onTrialClick: () => void;
    onSpinWheelClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onTrialClick, onSpinWheelClick }) => {
    return (
        <section 
            id="home"
            className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden"
        >
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
                poster="https://picsum.photos/1920/1080?grayscale&blur=2"
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-red-and-blue-lights-in-motion-24029-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-brand-black via-transparent to-brand-black/50"></div>
            
            <div className="relative z-10 px-4 max-w-4xl mx-auto">
                <div className="mb-4 inline-block bg-brand-red/20 border border-brand-red/50 text-brand-red font-semibold py-1 px-4 rounded-full text-sm">
                    <span className="animate-pulse">⚽</span> Live sports for your region!
                </div>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-4"
                    style={{ textShadow: '0 0 20px rgba(229, 9, 20, 0.7)' }}>
                    Your Gateway to Limitless TV
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
                    Experience thousands of channels, movies, and sports events in stunning 4K quality. Instant setup on all your favorite devices.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={onTrialClick}
                        className="w-full sm:w-auto text-white bg-brand-red hover:bg-brand-red-dark font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-red/30 animate-pulse-slow"
                    >
                        Start Your Free Trial
                    </button>
                    <button 
                        onClick={onSpinWheelClick}
                        className="w-full sm:w-auto text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
                    >
                        Get a Discount!
                    </button>
                </div>
                <div className="mt-12 flex justify-center items-center gap-x-6">
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span className="text-sm">Instant Activation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                         <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span className="text-sm">No Credit Card Required</span>
                    </div>
                     <div className="flex items-center space-x-2">
                         <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span className="text-sm">24/7 Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
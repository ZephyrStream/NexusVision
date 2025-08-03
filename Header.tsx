
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { navLinks } from '../constants/navigation';

interface HeaderProps {
    onTrialClick: () => void;
    onSpinWheelClick: () => void;
}

const Logo: React.FC = () => (
    <ReactRouterDOM.Link to="/" className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-brand-red" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14V8l6 4-6 4z"/>
            <path opacity="0.7" d="M12 4.5c-0.83 0-1.5.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5zm0 12c-0.83 0-1.5.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5zM18 10.5c-0.83 0-1.5.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5zM6 10.5c-0.83 0-1.5.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5z"/>
        </svg>
        <span className="text-2xl font-extrabold text-white tracking-wider">StreamNova</span>
    </ReactRouterDOM.Link>
);

const Header: React.FC<HeaderProps> = ({ onTrialClick, onSpinWheelClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-sm shadow-lg shadow-brand-red/10' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">{link.label}</a>
                    ))}
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    <button onClick={onSpinWheelClick} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                        Spin to Win!
                    </button>
                    <button onClick={onTrialClick} className="text-white bg-brand-red hover:bg-brand-red-dark font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 animate-pulse-slow">
                        Free Trial
                    </button>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-brand-black/95 backdrop-blur-md absolute top-full left-0 w-full transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-center space-y-6 py-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={toggleMenu} className="text-xl text-gray-200 hover:text-brand-red transition-colors duration-200">{link.label}</a>
                    ))}
                    <div className="flex flex-col space-y-4 w-4/5 pt-4">
                         <button onClick={() => { onSpinWheelClick(); toggleMenu(); }} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-semibold py-3 px-5 rounded-md transition-all duration-300">
                            Spin to Win!
                        </button>
                        <button onClick={() => { onTrialClick(); toggleMenu(); }} className="text-white bg-brand-red hover:bg-brand-red-dark font-semibold py-3 px-5 rounded-md transition-all duration-300 animate-pulse-slow">
                            Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

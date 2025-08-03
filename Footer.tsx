
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { navLinks } from '../constants/navigation';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-transform duration-300 transform hover:scale-125">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-gray border-t-2 border-brand-red/20">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="flex flex-col items-start">
                         <div className="flex items-center space-x-2 mb-4">
                            <svg className="w-10 h-10 text-brand-red" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14V8l6 4-6 4z"/>
                               <path opacity="0.7" d="M12 4.5c-0.83 0-1.5.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5zm0 12c-0.83 0-1.5.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5zM18 10.5c-0.83 0-1.5.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5zM6 10.5c-0.83 0-1.5.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5z"/>
                            </svg>
                            <span className="text-3xl font-extrabold text-white tracking-wider">StreamNova</span>
                        </div>
                        <p className="text-gray-400">Your Gateway to Limitless TV. Experience top-quality streaming, anytime, anywhere.</p>
                        <div className="flex space-x-5 mt-6">
                            <SocialIcon href="https://wa.me/1234567890"> {/* Replace with your WhatsApp number */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.908 6.161l-1.217 4.439 4.535-1.187z"/></svg>
                            </SocialIcon>
                            <SocialIcon href="https://t.me/yourusername"> {/* Replace with your Telegram username */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-12.47 5.432l3.433-3.834c.33-.368.165-.898-.287-.99l-4.572-.924c-.453-.092-.58.33-.207.618l8.72 6.646c.373.283.89.03.844-.41l-1.423-6.546c-.045-.208-.34-.208-.386 0l-1.96 5.86-5.59-3.802c-.373-.254-.854.12-.527.535l6.536 8.528z"/></svg>
                            </SocialIcon>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}><a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.label}</a></li>
                            ))}
                            <li><ReactRouterDOM.Link to="/referral" className="text-gray-400 hover:text-white transition-colors">Refer a Friend</ReactRouterDOM.Link></li>
                        </ul>
                    </div>
                    
                    {/* Legal */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Legal & Support</h3>
                        <ul className="space-y-3">
                            <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="/#/install" className="text-gray-400 hover:text-white transition-colors">Installation Guides</a></li>
                            <li><a href="#/" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#/" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#/" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
                            <li><a href="#/" className="text-gray-400 hover:text-white transition-colors">DMCA</a></li>
                        </ul>
                    </div>

                    {/* DMCA & Disclaimer */}
                    <div className="bg-brand-light-gray/50 p-4 rounded-lg">
                        <h3 className="text-white text-lg font-semibold mb-3">Important Notice</h3>
                        <p className="text-sm text-gray-300">
                            We do not host, provide, archive, store, or distribute media of any kind. We act solely as an index of media posted by other enthusiasts on the internet, which is completely outside of our control.
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} StreamNova. All Rights Reserved. Built for a premium viewing experience.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

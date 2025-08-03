
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { downloadLinks } from '../constants/downloads';

const DownloadButton: React.FC<{ link: typeof downloadLinks[0] }> = ({ link }) => {
    const isInternal = link.href.startsWith('/#');

    const buttonContent = (
         <div className="w-full bg-brand-gray border-2 border-brand-light-gray rounded-lg p-5 text-left flex items-center space-x-5 transition-all duration-300 transform hover:border-brand-red hover:-translate-y-1">
            <div className="text-4xl">{link.icon}</div>
            <div>
                <h4 className="text-xl font-bold text-white">{link.platform}</h4>
                <p className="text-gray-400 text-sm">{link.description}</p>
            </div>
             <svg className="w-6 h-6 text-gray-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>
    );
    
    if (isInternal) {
        return <ReactRouterDOM.Link to={link.href.substring(2)} className="block">{buttonContent}</ReactRouterDOM.Link>;
    }

    return <a href={link.href} target="_blank" rel="noopener noreferrer" className="block">{buttonContent}</a>;
}

const DownloadSection: React.FC = () => {
    return (
        <section id="downloads" className="py-20 bg-brand-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Watch on Any Device</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">StreamNova works seamlessly on your favorite devices. Get set up in minutes with our easy guides.</p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {downloadLinks.map((link) => (
                        <DownloadButton key={link.platform} link={link} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;

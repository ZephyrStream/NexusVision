
import React, { useState, FormEvent } from 'react';

interface FreeTrialModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [device, setDevice] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission, e.g., send to an API.
        // For this example, we'll just show a success message.
        console.log({ name, email, device });
        setIsSubmitted(true);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-brand-gray rounded-xl shadow-2xl shadow-brand-red/20 border border-brand-light-gray w-full max-w-lg relative" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                
                <div className="p-8">
                    {isSubmitted ? (
                        <div className="text-center">
                            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h2 className="text-2xl font-bold text-white mb-2">Request Sent!</h2>
                            <p className="text-gray-300">Thank you! Please check your email (and spam folder) for your trial credentials. Activation is usually instant but can take up to 15 minutes.</p>
                             <p className="text-sm text-gray-400 mt-4">If you don't receive it, please contact us on WhatsApp.</p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl font-bold text-white text-center mb-2">Get Your Free 24h Trial</h2>
                            <p className="text-gray-400 text-center mb-6">No credit card required. See for yourself why we're the best.</p>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full bg-brand-light-gray border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-red focus:border-brand-red" placeholder="John Doe" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-brand-light-gray border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-red focus:border-brand-red" placeholder="you@example.com" required />
                                </div>
                                 <div>
                                    <label htmlFor="device" className="block text-sm font-medium text-gray-300 mb-1">What device will you use?</label>
                                    <select id="device" value={device} onChange={e => setDevice(e.target.value)} className="w-full bg-brand-light-gray border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-red focus:border-brand-red" required>
                                        <option value="">-- Select a device --</option>
                                        <option value="Smart TV">Smart TV (Samsung, LG)</option>
                                        <option value="Android Box/Phone">Android Box/Phone</option>
                                        <option value="Firestick">Amazon Firestick</option>
                                        <option value="Apple TV/iOS">Apple TV / iPhone</option>
                                        <option value="PC/Mac">PC / Mac</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-4 rounded-md transition duration-300 text-lg">
                                    Claim My Trial Now
                                </button>
                            </form>
                            <p className="text-xs text-gray-500 text-center mt-4">By submitting, you agree to our terms of service. One trial per customer.</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FreeTrialModal;


import React from 'react';

const ReferralPage: React.FC = () => {
    const referralLink = 'https://streamnova.com/ref/user12345'; // Example link

    return (
        <div className="bg-brand-black min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Refer a Friend, Get Free TV</h1>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                    Love StreamNova? Share it with your friends and earn 1 FREE month of service for every friend who signs up for a paid plan.
                </p>

                <div className="bg-brand-gray p-8 rounded-xl max-w-2xl mx-auto border border-brand-light-gray">
                    <h2 className="text-2xl font-bold text-white mb-4">Your Unique Referral Link</h2>
                    <div className="flex items-center bg-brand-light-gray p-4 rounded-md">
                        <input
                            type="text"
                            value={referralLink}
                            readOnly
                            className="w-full bg-transparent text-gray-200 border-none focus:ring-0"
                        />
                        <button
                            onClick={() => navigator.clipboard.writeText(referralLink)}
                            className="bg-brand-red text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-red-dark transition-colors"
                        >
                            Copy
                        </button>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">Share this link via email, social media, or anywhere else. When a friend signs up using your link, you get rewarded!</p>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-white mb-8">Referral Leaderboard (Coming Soon)</h2>
                     <div className="bg-brand-gray p-8 rounded-xl max-w-2xl mx-auto border border-brand-light-gray">
                        <p className="text-gray-400">Track your referrals and see how you stack up against other StreamNova affiliates. The top referrer each month will win an extra prize!</p>
                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between items-center bg-brand-light-gray/50 p-3 rounded-md">
                                <span className="font-bold text-white">🥇 1. User_Alpha</span>
                                <span className="text-green-400 font-semibold">15 Referrals</span>
                            </div>
                            <div className="flex justify-between items-center bg-brand-light-gray/50 p-3 rounded-md">
                                <span className="font-bold text-white">🥈 2. Viewer_Max</span>
                                <span className="text-green-400 font-semibold">12 Referrals</span>
                            </div>
                             <div className="flex justify-between items-center bg-brand-light-gray/50 p-3 rounded-md">
                                <span className="font-bold text-white">🥉 3. YourUsername</span>
                                <span className="text-green-400 font-semibold">0 Referrals</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralPage;

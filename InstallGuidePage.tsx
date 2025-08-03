
import React from 'react';

const guides = [
    {
        device: 'Amazon Firestick',
        steps: [
            'From the Firestick home screen, go to Settings > My Fire TV > Developer Options.',
            'Turn ON both "ADB debugging" and "Apps from Unknown Sources".',
            'Go back to the home screen and search for the "Downloader" app. Install and open it.',
            'In Downloader, enter the following URL: `example.com/app.apk` and click Go.',
            'The app will download. Once finished, click Install.',
            'Open StreamNova from your apps list and enter your credentials.'
        ]
    },
    {
        device: 'Android TV/Box',
        steps: [
            'Open the Google Play Store on your device.',
            'Search for and install an IPTV player like "IPTV Smarters Pro" or "TiviMate".',
            'Open the player and choose to "Login with Xtream Codes API".',
            'Enter the server URL, username, and password provided in your activation email.',
            'Your channels and movies will now load.'
        ]
    },
     {
        device: 'Smart TV (LG/Samsung)',
        steps: [
            'Go to the App Store on your Smart TV.',
            'Search for and install the "IPTV Smarters Player" or "SET IPTV" app.',
            'For IPTV Smarters, follow the Android TV login steps.',
            'For SET IPTV, note the MAC address displayed on the screen.',
            'Go to the SET IPTV website on a computer, enter your MAC and the M3U link from your email, and upload.',
            'Restart the app on your TV.'
        ]
    }
];

const InstallGuidePage: React.FC = () => {
    return (
        <div className="bg-brand-black min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Installation Guides</h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Follow these simple steps to get StreamNova running on your favorite device in minutes.
                    </p>
                </div>

                <div className="space-y-12">
                    {guides.map((guide, index) => (
                        <div key={index} className="bg-brand-gray p-8 rounded-xl border border-brand-light-gray">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-brand-red/50 pb-3">{guide.device}</h2>
                            <ol className="list-decimal list-inside space-y-4 text-gray-300">
                                {guide.steps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="text-lg leading-relaxed">
                                        <span dangerouslySetInnerHTML={{ __html: step.replace(/`([^`]+)`/g, '<code class="bg-brand-light-gray text-brand-red font-mono px-2 py-1 rounded-md">$1</code>') }}></span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-16 bg-brand-gray/50 p-6 rounded-lg border border-brand-light-gray">
                    <h3 className="text-2xl font-bold text-white">Need Help?</h3>
                    <p className="text-gray-300 mt-2">If you get stuck, our 24/7 support team is here to help. Contact us via WhatsApp or Email for a quick response.</p>
                </div>
            </div>
        </div>
    );
};

export default InstallGuidePage;

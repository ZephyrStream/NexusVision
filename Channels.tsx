
import React from 'react';

const channelCategories = [
    { name: 'Live Sports', bg: 'https://picsum.photos/400/200?random=1', icon: '🏀' },
    { name: 'Premium Movies', bg: 'https://picsum.photos/400/200?random=2', icon: '🎬' },
    { name: 'Kids & Family', bg: 'https://picsum.photos/400/200?random=3', icon: '🧸' },
    { name: '24/7 News', bg: 'https://picsum.photos/400/200?random=4', icon: '📰' },
    { name: 'Entertainment', bg: 'https://picsum.photos/400/200?random=5', icon: '🎭' },
    { name: 'International', bg: 'https://picsum.photos/400/200?random=6', icon: '🌍' },
];

const ChannelCard: React.FC<{ category: { name: string; bg: string; icon: string; } }> = ({ category }) => (
    <div 
        className="relative rounded-lg overflow-hidden group h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${category.bg})`}}
    >
        <div className="absolute inset-0 bg-black/60 group-hover:bg-brand-red/80 transition-all duration-300 flex flex-col justify-center items-center p-4">
            <div className="text-4xl mb-2 transform transition-transform duration-300 group-hover:scale-110">{category.icon}</div>
            <h3 className="text-white text-xl font-bold text-center">{category.name}</h3>
        </div>
    </div>
);


const Channels: React.FC = () => {
    return (
        <section id="channels" className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Content for Everyone</h2>
                <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">From blockbuster movies and thrilling live sports to international news and kids' favorites, our massive library has it all.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {channelCategories.map(cat => <ChannelCard key={cat.name} category={cat} />)}
                </div>
                 <p className="text-gray-400 mt-8 text-sm">*Channel availability subject to change and regional variations. Logos are for illustrative purposes only.</p>
            </div>
        </section>
    );
};

export default Channels;

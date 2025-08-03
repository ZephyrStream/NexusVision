
import React from 'react';

const blogPosts = [
    {
        id: 1,
        title: 'Top 5 Must-Watch Sporting Events This Month',
        category: 'Top Sports Events',
        date: 'October 26, 2023',
        excerpt: 'From thrilling soccer matches to high-stakes boxing, here are the live sports events you absolutely cannot miss on StreamNova this month...',
        image: 'https://picsum.photos/600/400?random=20'
    },
    {
        id: 2,
        title: 'IPTV News: The Latest Updates to Our VOD Library',
        category: 'IPTV News',
        date: 'October 24, 2023',
        excerpt: 'We\'ve just added over 1,000 new movies and TV shows to our on-demand library. Find out what\'s new and what\'s coming next...',
        image: 'https://picsum.photos/600/400?random=21'
    },
    {
        id: 3,
        title: 'How to Get the Best Picture Quality on Your Smart TV',
        category: 'Installation Guides',
        date: 'October 22, 2023',
        excerpt: 'A few simple tweaks to your TV and app settings can make a huge difference in your viewing experience. Follow our guide to get the best possible picture...',
        image: 'https://picsum.photos/600/400?random=22'
    }
];

const BlogPage: React.FC = () => {
    return (
        <div className="bg-brand-black min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">StreamNova Knowledge Hub</h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Stay updated with the latest IPTV news, find installation help, and discover what to watch.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-brand-gray rounded-lg overflow-hidden border border-brand-light-gray/50 transform transition-transform duration-300 hover:-translate-y-2">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <p className="text-sm text-brand-red font-semibold mb-2">{post.category}</p>
                                <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
                                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                                <a href="#/" className="font-semibold text-white hover:text-brand-red transition-colors">Read More &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;

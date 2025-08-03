
import React from 'react';
import { testimonialsData } from '../constants/testimonials';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

const TestimonialCard: React.FC<{ testimonial: typeof testimonialsData[0] }> = ({ testimonial }) => (
    <div className="bg-brand-gray p-8 rounded-xl border border-brand-light-gray/50 h-full flex flex-col justify-between">
        <div>
            <StarRating rating={testimonial.rating} />
            <p className="text-gray-300 italic my-4">"{testimonial.quote}"</p>
        </div>
        <div className="flex items-center mt-4">
            <img className="w-12 h-12 rounded-full mr-4 object-cover" src={testimonial.avatar} alt={testimonial.name} />
            <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Loved by Viewers Worldwide</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">Don't just take our word for it. Here's what our satisfied customers have to say about StreamNova.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

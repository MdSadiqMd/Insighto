'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    {
        quote: "This platform has revolutionized how we collect and analyze customer feedback. It's a game-changer!",
        author: "Jane Doe",
        role: "CEO, TechCorp",
        avatar: "/placeholder.svg?height=80&width=80"
    },
    {
        quote: "The ease of integration and powerful analytics have significantly improved our product development process.",
        author: "John Smith",
        role: "Product Manager, InnovateCo",
        avatar: "/placeholder.svg?height=80&width=80"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-[#242629]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#16161a] p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    width={40}
                                    height={40}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-semibold">{testimonial.author}</p>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
'use client';

import { motion } from 'framer-motion';
import { Zap, Target, BarChart } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: 'Quick Setup',
        description: 'Create and deploy feedback forms in minutes with our intuitive interface.'
    },
    {
        icon: Target,
        title: 'Seamless Integration',
        description: 'Easily integrate your feedback forms into any platform or application.'
    },
    {
        icon: BarChart,
        title: 'Powerful Analytics',
        description: 'Gain valuable insights with our comprehensive analytics dashboard.'
    }
];

export default function Features() {
    return (
        <section className="py-20 bg-[#242629]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#16161a] p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
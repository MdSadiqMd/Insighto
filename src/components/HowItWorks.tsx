'use client';

import { motion } from 'framer-motion';
import { UserPlus, Palette, Link, BarChart3 } from 'lucide-react';

const steps = [
    { icon: UserPlus, title: 'Create Account', description: 'Sign up and set up your Insighto profile in seconds.' },
    { icon: Palette, title: 'Design Your Form', description: 'Choose tags and customize the Insighto form theme to match your brand.' },
    { icon: Link, title: 'Get Your Link', description: 'Receive a unique Insighto link to integrate your form anywhere.' },
    { icon: BarChart3, title: 'Analyze Feedback', description: 'View submissions and analyze data in your Insighto dashboard.' },
];

export default function HowItWorks() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">How Insighto Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-blue-900 p-6 rounded-full mb-4">
                                <step.icon className="w-12 h-12 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-300 text-sm">{step.description}</p>
                            {index < steps.length - 1 && (
                                <motion.div
                                    className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-blue-700"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
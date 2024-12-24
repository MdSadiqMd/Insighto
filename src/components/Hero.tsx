'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Collect Feedback,<br />
                        <span className="text-blue-400">Effortlessly</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8 max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Create custom feedback forms in minutes. Integrate anywhere. Analyze insights easily.
                    </motion.p>
                    <motion.div
                        className="flex"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Button size="lg" className="mr-4">Get Started</Button>
                        <Button size="lg" variant="outline">Learn More</Button>
                    </motion.div>
                </div>
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Feedback Platform"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-2xl"
                    />
                </motion.div>
            </div>
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-20"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </motion.div>
        </section>
    );
}
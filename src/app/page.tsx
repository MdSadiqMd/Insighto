import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#16161a] text-white dark">
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Footer />
        </main>
    );
}
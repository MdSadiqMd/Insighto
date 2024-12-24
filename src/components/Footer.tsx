import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">FeedbackPro</h3>
                        <p className="text-gray-300">Empowering businesses with actionable insights through seamless feedback collection.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition">Features</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition">Pricing</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
                        <form className="flex">
                            <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                            <Button type="submit" className="rounded-l-none">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-300">&copy; 2023 FeedbackPro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
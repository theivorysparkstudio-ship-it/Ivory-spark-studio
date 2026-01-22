import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="glass mt-20 pt-10 pb-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-wider block mb-4">
                            <span className="text-ivory">IVORY</span>
                            <span className="text-gold ml-1">SPARK</span>
                        </Link>
                        <p className="text-ivory/60 max-w-sm">
                            Bringing your ideas to life with premium 3D printing and designing services.
                            Elevating spaces with custom lamps and products.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-ivory/70 hover:text-gold transition-colors">Home</Link></li>
                            {/* <li><Link href="/#services" className="text-ivory/70 hover:text-gold transition-colors">Services</Link></li> */}
                            <li><Link href="/products" className="text-ivory/70 hover:text-gold transition-colors">Products</Link></li>
                            <li><Link href="/blog" className="text-ivory/70 hover:text-gold transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-ivory/70 hover:text-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-gold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start text-ivory/70">
                                <Mail size={18} className="mr-3 text-gold mt-1 flex-shrink-0" />
                                <a href="mailto:theivoryspark.studio@gmail.com" className="hover:text-gold transition-colors">theivoryspark.studio@gmail.com</a>
                            </li>
                            <li className="flex items-start text-ivory/70">
                                <Phone size={18} className="mr-3 text-gold mt-1 flex-shrink-0" />
                                <a href="https://wa.me/917374045132" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">+91 737 404 5132</a>
                            </li>
                            <li className="pt-4">
                                <div className="flex space-x-4">
                                    <a href="https://www.instagram.com/the_ivory_sp_studio?igsh=MTUwN2I1d2JmaWt4NQ==" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all transform hover:scale-110">
                                        <Instagram size={20} /> the_ivory_sp_studio
                                    </a>
                                    {/* <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all transform hover:scale-110">
                                        <Linkedin size={20} />
                                    </a> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 text-center text-sm text-ivory/40">
                    &copy; {new Date().getFullYear()} The Ivory Spark Studio. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="w-full relative z-50 glass border-b-0 border-white/5 flex-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-gold/20 group-hover:border-gold/50 transition-colors">
                                <Image
                                    src="/logo.jpg"
                                    alt="The Ivory Spark Studio Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <motion.div
                                initial="hidden"
                                whileHover="visible"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0.8 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                                }}
                                className="flex text-lg sm:text-2xl font-bold tracking-wider"
                            >
                                {/* "The Ivory" Animation */}
                                {"The Ivory".split('').map((char, i) => (
                                    <motion.span
                                        key={`the-ivory-${i}`}
                                        variants={{
                                            hidden: { y: 0, color: '#FDFCF5' },
                                            visible: { y: [0, -2, 0], color: ['#FDFCF5', '#FFD700', '#FDFCF5'] }
                                        }}
                                        className="text-ivory"
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                ))}

                                <span className="w-2"></span>

                                {/* "Spark" Animation */}
                                {"Spark".split('').map((char, i) => (
                                    <motion.span
                                        key={`spark-${i}`}
                                        variants={{
                                            hidden: { scale: 1, color: '#FFD700', textShadow: "0px 0px 0px rgba(255,215,0,0)" },
                                            visible: {
                                                scale: [1, 1.1, 1],
                                                color: ['#FFD700', '#FFF', '#FFD700'],
                                                textShadow: ["0px 0px 0px rgba(255,215,0,0)", "0px 0px 10px rgba(255,215,0,0.8)", "0px 0px 0px rgba(255,215,0,0)"]
                                            }
                                        }}
                                        className="text-gold"
                                    >
                                        {char}
                                    </motion.span>
                                ))}

                                <span className="w-2"></span>

                                {/* "Studio" Animation */}
                                {"Studio".split('').map((char, i) => (
                                    <motion.span
                                        key={`studio-${i}`}
                                        variants={{
                                            hidden: { y: 0, color: '#FDFCF5' },
                                            visible: { y: [0, -2, 0], color: ['#FDFCF5', '#FFD700', '#FDFCF5'] }
                                        }}
                                        className="text-ivory"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-ivory/80 hover:text-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium tracking-wide uppercase"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="bg-gold text-dark px-5 py-2 rounded-full font-bold hover:bg-gold-dim transition-transform transform hover:scale-105"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-ivory hover:text-gold focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden absolute top-20 left-0 w-full h-screen bg-black/95 backdrop-blur-xl border-t border-white/5 overflow-y-auto"
                >
                    <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-ivory w-full text-center py-3 rounded-xl text-lg font-medium hover:bg-white/5 hover:text-gold transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center bg-gold text-dark py-3 rounded-xl font-bold hover:bg-white transition-colors mt-4"
                        >
                            Get a Free Quote
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;

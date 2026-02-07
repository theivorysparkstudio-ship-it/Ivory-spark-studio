'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers, PenTool } from 'lucide-react';

const services = [
    {
        title: '3D Printing Service',
        description: 'Premium quality FDM printing services for prototypes, functional parts, and artistic models. We offer high durability, precision, and a range of premium surface finishes.',
        features: ['Rapid prototyping', 'Functional and mechanical parts ', 'Custom models'],
        icon: Layers,
        color: 'text-gold'
    },
    {
        title: '3D Design & Modeling',
        description: 'Accurate, elegant CAD design and 3D modeling services. We transform ideas into detailed, production-ready digital designs for prototyping, manufacturing, and innovation.',
        features: ['CAD Modeling', 'CAD for Manufacturing', 'Product Rendering'],
        icon: PenTool,
        color: 'text-ivory'
    }
];

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-dark">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/hero-image.png"
                    alt="Modern 3D Printing Studio workspace"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Dark Overlay for Text Readability - Enhanced for mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/30"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full h-full min-h-screen">

                {/* Top: Hero Text - Left Aligned */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left max-w-4xl mb-12 sm:mb-20"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                        Bring Your <br />
                        <span className="text-gradient-gold drop-shadow-none">Ideas to Life</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-ivory/90 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                        The Ivory Spark Studio specializes in premium 3D services. From custom designing to high-quality 3D printing, we craft products that shine.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center bg-gold text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-dim transition-transform transform hover:scale-105 shadow-lg"
                        >
                            Get a Free Quote <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center border border-gold text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gold/20 transition-colors backdrop-blur-sm shadow-lg"
                        >
                            View Products
                        </Link>
                    </div>
                </motion.div>

                {/* Bottom: Services Cards Overlay - Expanded & Professional */}
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (index * 0.2), duration: 0.6 }}
                                className="group relative overflow-hidden p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-gold/20 hover:to-gold/5 transition-all duration-500 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-dark/80 backdrop-blur-md rounded-3xl" />
                                <div className="relative p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start h-full">
                                    {/* Icon Container with Glow */}
                                    <div className={`relative flex-shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300 ${service.color}`}>
                                        <service.icon size={32} strokeWidth={1.5} />
                                        <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
                                    </div>

                                    <div className="flex-grow">
                                       

                                        <p className="text-ivory/70 text-sm leading-relaxed mb-4 border-b border-white/5 pb-4">
                                            {service.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-1">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center text-xs text-ivory/50 uppercase tracking-wide font-medium">
                                                    <span className="w-1 h-1 rounded-full bg-gold/50 mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;

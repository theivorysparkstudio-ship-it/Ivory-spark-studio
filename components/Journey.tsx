'use client';

import { motion } from 'framer-motion';
import { MessageSquare, FileText, PenTool, Settings, Package, ChevronRight } from 'lucide-react';

const steps = [
    {
        id: '01',
        title: 'Initial Consultation',
        description: 'Analyze your idea and requirements for optimal CAD and 3D printing.',
        icon: MessageSquare,
        details: ['Feasibility assessment','Material recommendations']
    },
    {
        id: '02',
        title: 'Detailed Quotation',
        description: 'Transparent quotation with design scope, materials, timelines, and costs.',
        icon: FileText,
        details: ['Cost details','Timeline details']
    },
    {
        id: '03',
        title: 'Planning & Design',
        description: 'Optimized planning and precision CAD designs for high-quality printing.',
        icon: PenTool,
        details: ['CAD Design finalization','Production schedule']
    },
    {
        id: '04',
        title: 'Production',
        description: 'Advanced 3D printing for durable, high-precision, quality parts.',
        icon: Settings,
        details: ['Advance process','High Quality ']
    },
    {
        id: '05',
        title: 'Final Delivery',
        description: 'Quality inspection completed before packaging and timely delivery.',
        icon: Package,
        details: ['Quality inspections', 'Delivery support']
    }
];

const Journey = () => {
    return (
        <section className="py-24 bg-black/5 relative overflow-hidden mb-20">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-bold text-sm mb-4 border border-gold/20"
                    >
                        JOURNEY PROCESS
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        How we <span className="text-gradient-gold">work</span>
                    </motion.h2>
                    <p className="text-xl text-ivory/60 max-w-3xl mx-auto">
                         From initial consultation to final delivery, The Ivory Spark Studio provides seamless CAD design and premium 3D printing services with transparency, precision, and on-time delivery.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                    {/* Connecting Line (Mobile sidebar) */}
                    <div className="lg:hidden absolute top-0 left-6 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative group flex lg:block items-start lg:items-center gap-6 lg:gap-0"
                            >
                                {/* Step Number & Node */}
                                <div className="flex flex-col items-center lg:mb-8 relative z-10 flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-dark border-4 border-gold text-white font-bold flex items-center justify-center text-lg shadow-[0_0_20px_rgba(255,215,0,0.3)] group-hover:scale-110 transition-transform duration-300">
                                        {step.id}
                                    </div>
                                    {/* Mobile connector hidden here, using absolute global line instead */}
                                    <div className="hidden lg:block lg:hidden h-16 w-0.5 bg-white/10 my-2" />
                                </div>

                                {/* Card */}
                                <div className="glass p-5 md:p-6 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-300 w-full bg-white/5 hover:shadow-2xl hover:shadow-gold/5 flex flex-col items-start lg:items-center text-left lg:text-center">
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-dark transition-colors duration-300">
                                        <step.icon size={24} />
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-ivory/60 mb-4 flex-grow leading-relaxed">{step.description}</p>

                                    <div className="w-full pt-3 border-t border-white/10">
                                        {step.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-center text-xs text-ivory/80 mb-1.5 justify-start lg:justify-startr">
                                                <ChevronRight size={12} className="text-gold mr-1" />
                                                {detail}
                                            </div>
                                        ))}
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

export default Journey;

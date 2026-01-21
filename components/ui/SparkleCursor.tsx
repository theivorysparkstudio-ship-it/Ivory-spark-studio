'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SparkleCursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position using MotionValues for performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the cursor
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const draggingSpringConfig = { damping: 25, stiffness: 200, mass: 0.8 }; // Slower when moving fast? No, just keep it snappy.

    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', moveMouse);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            style={{
                x,
                y,
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
            }}
            className="hidden md:block" // Hide on mobile
        >
            {/* Main Glowing Orb */}
            {/* 3D Pen Graphic */}
            <div className="relative -translate-x-0 -translate-y-0">
                {/* Pen Body SVG */}
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transform -rotate-255"
                    style={{ overflow: 'visible' }}
                >
                    <path
                        d="M19.14 7.5L16.5 4.86C16.11 4.47 15.59 4.25 15.04 4.25C14.49 4.25 13.97 4.47 13.59 4.86L4.5 13.95V19.5H10.05L19.14 10.41C19.53 10.02 19.75 9.5 19.75 8.95C19.75 8.4 19.53 7.89 19.14 7.5ZM6.5 17.5H5.5V16.5L12.5 9.5L13.5 10.5L6.5 17.5Z"
                        fill="#FFD700"
                        stroke="#FDFCF5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M14 11L13 10" stroke="#FDFCF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Filament/Trail Emitter at Tip */}
                <div className="absolute top-[32px] left-[0px]">
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_8px_cyan]"
                    />
                    {/* Trailing Sparkles - Enhanced */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                y: [0, 20 + Math.random() * 20],
                                x: [0, (Math.random() - 0.5) * 20],
                                opacity: [1, 0],
                                scale: [1, 0],
                            }}
                            transition={{
                                duration: 0.8 + Math.random() * 0.5,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeOut",
                            }}
                            className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-gold' : 'bg-cyan-300'}`}
                            style={{
                                left: Math.random() * 4 - 2,
                                top: Math.random() * 4 - 2
                            }}
                        />
                    ))}
                    {/* Floating Dust Particles */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={`dust-${i}`}
                            animate={{
                                y: [0, -15],
                                x: [0, (Math.random() - 0.5) * 15],
                                opacity: [0, 0.8, 0],
                                scale: [0.5, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeOut",
                            }}
                            className="absolute w-0.5 h-0.5 bg-white rounded-full"
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SparkleCursor;

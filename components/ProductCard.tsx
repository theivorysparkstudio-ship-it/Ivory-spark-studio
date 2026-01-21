'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

type MediaItem = {
    type: 'image' | 'video';
    url: string;
    id: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, description, price, category, images, video, discount } = product;
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // Calculate final price
    const finalPrice = Math.max(0, price - (discount || 0));

    // Combine images and video into a single media array
    const mediaItems: MediaItem[] = useMemo(() => {
        const items: MediaItem[] = images.map((img) => ({
            type: 'image',
            url: img.url,
            id: img.id,
        }));

        if (video) {
            items.push({
                type: 'video',
                url: video,
                id: 'product-video',
            });
        }

        // Fallback if no media
        if (items.length === 0) {
            items.push({
                type: 'image',
                url: '/placeholder.png',
                id: 'placeholder',
            });
        }

        return items;
    }, [images, video]);

    const currentMedia = mediaItems[currentMediaIndex];

    // Auto-swipe logic
    useEffect(() => {
        // Don't auto-swipe if:
        // 1. Only one item
        // 2. User is hovering (optional preference)
        // 3. Current item is a video (waiting for user interaction or playing)
        if (mediaItems.length <= 1 || isHovered || currentMedia.type === 'video') return;

        const interval = setInterval(() => {
            setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, [mediaItems.length, isHovered, currentMedia.type]);

    const nextMedia = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
        setIsPlaying(false); // Reset video playing state on slide change
    };

    const prevMedia = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
        setIsPlaying(false);
    };

    const handleBuyNow = () => {
        const phoneNumber = '917374045132';

        const message = `Hello, I am interested in buying the following product:

*Product Name*: ${name}
*Category*: ${category}
*Price*: ₹${finalPrice.toFixed(2)}

Please let me know the availability and next steps.`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.div
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Media Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-900/50 flex-shrink-0">
                <AnimatePresence mode="wait">
                    {currentMedia.type === 'image' ? (
                        <motion.img
                            key={currentMedia.id}
                            src={currentMedia.url}
                            alt={`${name} - Media ${currentMediaIndex + 1}`}
                            className="w-full h-full object-cover absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    ) : (
                        <motion.div
                            key={currentMedia.id}
                            className="w-full h-full absolute inset-0 bg-black flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <video
                                src={currentMedia.url}
                                className="w-full h-full object-cover"
                                controls
                                // Optionally mute by default or let user control
                                // muted 
                                onClick={(e) => e.stopPropagation()} // Prevent click from triggering parental events if any
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Stock Tag Overlay */}
                {product.stock > 0 && (
                    <div className="absolute top-3 left-3 z-20">
                        <span className="text-[10px] font-bold text-green-950 bg-green-400 px-2 py-1 rounded-full shadow-lg">
                            Stock: {product.stock}
                        </span>
                    </div>
                )}


                {/* Navigation Arrows */}
                {mediaItems.length > 1 && (
                    <>
                        {/* Left Arrow */}
                        <button
                            onClick={prevMedia}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-10"
                            aria-label="Previous media"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={nextMedia}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-10"
                            aria-label="Next media"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                            {mediaItems.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentMediaIndex(idx);
                                        setIsPlaying(false);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentMediaIndex === idx
                                        ? 'bg-gold w-4'
                                        : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                    aria-label={`Go to media ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">{category}</span>
                        <h3 className="text-lg font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">{name}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        {discount > 0 ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-400 line-through">₹{price.toFixed(2)}</span>
                                    <span className="text-[10px] font-bold text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded">
                                        Save ₹{discount}
                                    </span>
                                </div>
                                <span className="text-lg font-bold text-white">₹{finalPrice.toFixed(2)}</span>
                            </>
                        ) : (
                            <span className="text-lg font-bold text-white">₹{price.toFixed(2)}</span>
                        )}
                    </div>
                </div>

                <p className="text-gray-400 text-sm line-clamp-2 mb-4">{description}</p>

                <button
                    onClick={handleBuyNow}
                    className="w-full py-2 mt-auto flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all font-bold text-sm shadow-lg shadow-green-500/20"
                >
                    <ShoppingBag size={16} />
                    Buy Now
                </button>
            </div>
        </motion.div>
    );
};

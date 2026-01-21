'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components/ProductCard';
import { motion } from 'framer-motion';

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Derive unique categories from products
    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
        return ['All', ...uniqueCategories].sort();
    }, [products]);

    // Filter products based on selected category
    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') return products;
        return products.filter(product => product.category === selectedCategory);
    }, [products, selectedCategory]);

    return (
        <div className="space-y-12">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategory === category
                                ? 'bg-gold text-dark shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                                : 'bg-white/5 text-ivory/60 hover:bg-white/10 hover:text-white border border-white/5'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <h2 className="text-2xl font-semibold text-gray-300">No Products Found</h2>
                    <p className="text-gray-500 mt-2">
                        Try selecting a different category.
                    </p>
                </div>
            ) : (
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            )}
        </div>
    );
}

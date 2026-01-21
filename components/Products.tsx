'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types';
import Link from 'next/link';
import { ProductCard } from './ProductCard';

interface ProductsProps {
    products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
    // Only show top 3
    const featuredProducts = products.slice(0, 3);

    return (
        <section id="products" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-white"
                    >
                        Featured <span className="text-gradient-gold">Products</span>
                    </motion.h2>
                    <p className="text-lg text-ivory/60 max-w-2xl mx-auto">
                        Explore our curated collection of 3D printed marvels.
                    </p>
                </div>

                {/* Reuse ProductCard for consistency as requested */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {featuredProducts.length === 0 && (
                        <div className="col-span-3 text-center text-gray-500">
                            No products found.
                        </div>
                    )}
                </div>

                <div className="flex justify-center">
                    <Link href="/products">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 rounded-full bg-yellow-500 text-black font-bold text-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            View All Products
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Products;

import React from 'react';
import { getProducts } from '@/lib/airtable';
import ProductGrid from '@/components/ProductGrid';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4 mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent text-gradient-gold">
                        Our Collection
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl">
                        Discover our range of premium 3D printed artifacts, connected directly to our live inventory system.
                    </p>
                </div>

                {/* Products Grid with Filter */}
                <ProductGrid products={products} />

            </div>
        </div>
    );
}

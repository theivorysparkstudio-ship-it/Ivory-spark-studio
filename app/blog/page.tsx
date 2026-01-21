import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getBlogPosts } from '@/lib/airtable';

// Enable ISR with 60-second revalidation
export const revalidate = 60;

export default async function BlogListingPage() {
    const blogPosts = await getBlogPosts();

    return (
        <div className="min-h-screen bg-dark flex flex-col">
            <main className="flex-1 pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Our <span className="text-gradient-gold">Blog</span>
                    </h1>
                    <p className="text-xl text-ivory/60 max-w-2xl mx-auto">
                        Deep dives into the technology, business, and art of 3D printing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link href={`/blog/${post.id}`} key={post.id} className="group">
                            {/* Note: Framer Motion 'motion.div' doesn't work well in Server Components directly 
                                 without 'use client'. We'll use standard div with CSS classes for hover effects 
                                 to keep this a Server Component for SEO and data fetching simplicity. 
                             */}
                            <div
                                className="h-full bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/5 flex flex-col"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gold border border-gold/20">
                                            {post.tags[0]}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-ivory/60 text-sm mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="text-gold text-sm font-semibold flex items-center mt-auto">
                                        Read More <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}

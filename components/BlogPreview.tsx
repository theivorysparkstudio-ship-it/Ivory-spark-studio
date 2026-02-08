'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogPreviewProps {
    initialPosts: BlogPost[];
}

const BlogPreview = ({ initialPosts }: BlogPreviewProps) => {
    // Show only the first two blogs (rendering logic moved to parent, but safety check here)
    const recentPosts = initialPosts.slice(0, 2);

    return (
        <section id="blog-preview" className="py-24 bg-dark relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4 text-white"
                        >
                            Latest <span className="text-gradient-gold">Insights</span>
                        </motion.h2>
                        <p className="text-lg text-ivory/60 max-w-xl">
                            Explore insights, techniques, and trends in 3D printing and CAD modeling—where design precision meets with advance manufacturing.
                        </p>
                    </div>

                    <Link href="/blog">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-dark transition-all font-semibold flex items-center group"
                        >
                            View All Articles
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </div>

                <div className="flex flex-col gap-12">
                    {recentPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 rounded-3xl p-6 lg:p-8 border border-white/5 hover:border-gold/20 transition-all duration-500"
                        >
                            {/* Image Side */}
                            <div className="lg:col-span-5 relative h-64 lg:h-80 w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-7 flex flex-col justify-center">

                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-gold transition-colors leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-ivory/70 text-base md:text-lg mb-8 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-4">
                                    <Link href={`/blog/${post.id}`}>
                                        <span className="inline-flex items-center text-white font-semibold group-hover:text-gold transition-colors border-b border-transparent group-hover:border-gold pb-1 cursor-pointer">
                                            Read Article <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                                        </span>
                                    </Link>
                                    <div className="flex gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-ivory/60 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;

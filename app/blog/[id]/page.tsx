import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getBlogPostById } from '@/lib/airtable';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Enable ISR with 60-second revalidation
export const revalidate = 60;

type Props = {
    params: Promise<{ id: string }>
}

export default async function BlogPostPage({ params }: Props) {
    const { id } = await params;
    const post = await getBlogPostById(id);

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen bg-dark pt-32 pb-24">
            {/* Hero Image / Header */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/blog" className="inline-flex items-center text-ivory/60 hover:text-gold mb-8 transition-colors group">
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                </Link>

                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags && post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold border border-gold/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        {post.title}
                    </h1>
                </div>

                <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-gold/5">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content Body */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-ivory/80 prose-p:leading-[1.5] prose-a:text-gold prose-blockquote:border-gold prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-img:rounded-2xl">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* Footer / CTA */}
                <div className="mt-16 pt-12 border-t border-white/10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>
                    <p className="text-ivory/60 mb-8">Subscribe to our newsletter for more insights on 3D printing & CAD design.</p>
                    <div className="flex max-w-md mx-auto gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                        />
                        <button className="bg-gold text-dark font-bold px-8 py-3 rounded-full hover:bg-white hover:text-dark transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

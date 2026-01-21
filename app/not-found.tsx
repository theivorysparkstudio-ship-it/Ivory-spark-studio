import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-white mb-4">
                404
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Page Not Found</h3>
            <p className="text-ivory/60 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="inline-flex items-center bg-gold text-dark font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
                <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
            </Link>
        </div>
    );
}

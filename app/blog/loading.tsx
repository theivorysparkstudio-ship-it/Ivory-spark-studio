export default function Loading() {
    return (
        <div className="min-h-screen bg-dark flex flex-col pt-24 pb-24 px-4 sm:px-6 lg:px-8">
            <main className="max-w-7xl mx-auto w-full">
                {/* Header Skeleton */}
                <div className="text-center mb-20 space-y-6">
                    <div className="h-20 w-1/2 bg-white/5 mx-auto rounded-xl animate-pulse" />
                    <div className="h-6 w-1/3 bg-white/5 mx-auto rounded-lg animate-pulse" />
                </div>

                {/* Blog Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-full bg-white/5 rounded-2xl overflow-hidden border border-white/5 animate-pulse flex flex-col">
                            {/* Image Placeholder */}
                            <div className="h-64 bg-white/10 w-full relative">
                                <div className="absolute top-4 right-4 h-6 w-20 bg-white/10 rounded-full" />
                            </div>

                            {/* Content Placeholder */}
                            <div className="p-6 flex flex-col flex-grow space-y-4">
                                <div className="h-8 w-3/4 bg-white/10 rounded" />
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-white/10 rounded" />
                                    <div className="h-4 w-full bg-white/10 rounded" />
                                    <div className="h-4 w-2/3 bg-white/10 rounded" />
                                </div>
                                <div className="h-6 w-24 bg-white/10 rounded mt-auto" />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

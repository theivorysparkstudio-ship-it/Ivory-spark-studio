export default function Loading() {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header Skeleton */}
                <div className="text-center space-y-4 mb-8">
                    <div className="h-16 w-3/4 md:w-1/2 bg-white/5 mx-auto rounded-lg animate-pulse" />
                    <div className="h-6 w-2/3 md:w-1/3 bg-white/5 mx-auto rounded-lg animate-pulse" />
                </div>

                {/* Filter Skeleton */}
                <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-10 w-24 bg-white/5 rounded-full animate-pulse flex-shrink-0" />
                    ))}
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white/5 rounded-3xl overflow-hidden h-[500px] border border-white/5 animate-pulse">
                            <div className="h-[300px] bg-white/10" />
                            <div className="p-6 space-y-4">
                                <div className="h-8 w-3/4 bg-white/10 rounded" />
                                <div className="h-4 w-full bg-white/10 rounded" />
                                <div className="h-4 w-2/3 bg-white/10 rounded" />
                                <div className="flex justify-between items-center pt-4">
                                    <div className="h-8 w-24 bg-white/10 rounded" />
                                    <div className="h-10 w-32 bg-white/10 rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

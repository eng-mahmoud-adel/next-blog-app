'use client';

export default function Error({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="container mx-auto p-4 h-screen flex flex-col gap-4 justify-center items-center">
            <h2 className="text-2xl font-bold">{error.message}</h2>
            <button
                className="text-lg font-semibold p-4 bg-cyan-500 text-white rounded-lg"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    )
}
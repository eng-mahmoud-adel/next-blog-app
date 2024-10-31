import Link from 'next/link'

export default async function NotFound() {
    return (
        <div className="container mx-auto p-4 h-screen flex flex-col gap-4 justify-center items-center">
            <h2 className="text-2xl font-bold">Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/blogs" className="text-lg font-semibold p-4 bg-cyan-500 text-white rounded-lg">All blogs</Link>
        </div>
    )
}
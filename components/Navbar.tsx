import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className = "w-full bg-black text-white px-6 py-4 flex justify-between items-center">
            <h1 className = "text-xl font-bold">PowerGym</h1>
            <div className = "space-x-6">
                <Link href="/" className = "text-white-500 hover:underline">Home</Link>
                <Link href="/about" className = "text-white-500 hover:underline">About</Link>
                <Link href="/trainers" className = "text-white-500 hover:underline">Trainers</Link>
                <Link href="/pricing" className = "text-white-500 hover:underline">Pricing</Link>
                <Link href="/contact" className = "text-white-500 hover:underline">Contact</Link>
            </div>
        </nav>
    );}

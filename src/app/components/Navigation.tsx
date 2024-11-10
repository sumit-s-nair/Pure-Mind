import Link from 'next/link';

const Navigation: React.FC = () => (
<nav className="fixed top-0 w-full flex justify-between items-center p-6 bg-blue-900 text-white z-10 shadow-md animate-on-load">
        <h1 className="text-2xl font-bold">Pure Mind</h1>
        <div className="space-x-4 font-bold">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About Us</Link>
      <Link href="/programs" className="hover:underline">Programs</Link>
      <Link href="/contact" className="hover:underline">Contact Us</Link>
    </div>
  </nav>
);

export default Navigation;
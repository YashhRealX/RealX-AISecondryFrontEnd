import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-red-600 text-xl font-bold">LOGO</span>
            </div>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/investments" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Investments
              </Link>
              <Link href="/orders" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/solid';

export default function AccountSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-900 p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-400">Total Balance</h3>
        <p className="text-2xl font-bold text-white">$124,532.89</p>
        <div className="flex items-center mt-2">
          <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-sm text-green-500">+2.5%</span>
        </div>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-400">Invested Amount</h3>
        <p className="text-2xl font-bold text-white">$98,750.00</p>
        <div className="flex items-center mt-2">
          <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-sm text-green-500">+12.8%</span>
        </div>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-400">Today's P/L</h3>
        <p className="text-2xl font-bold text-red-500">-$1,250.34</p>
        <div className="flex items-center mt-2">
          <ArrowTrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
          <span className="text-sm text-red-500">-1.2%</span>
        </div>
      </div>
    </div>
  );
}
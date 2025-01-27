const holdings = [
  { name: 'Tesla Inc.', symbol: 'TSLA', shares: 50, avgPrice: 242.50, currentPrice: 256.80, change: 5.89 },
  { name: 'Apple Inc.', symbol: 'AAPL', shares: 100, avgPrice: 145.75, currentPrice: 142.90, change: -1.95 },
  { name: 'Microsoft', symbol: 'MSFT', shares: 75, avgPrice: 285.30, currentPrice: 312.40, change: 9.50 },
];

export default function Holdings() {
  return (
    <div className="bg-gray-900 rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Current Holdings</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Shares</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Avg Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Current</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-800">
            {holdings.map((holding) => (
              <tr key={holding.symbol}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-white">{holding.name}</div>
                      <div className="text-sm text-gray-400">{holding.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{holding.shares}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${holding.avgPrice.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${holding.currentPrice.toFixed(2)}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${holding.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {holding.change >= 0 ? '+' : ''}{holding.change}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
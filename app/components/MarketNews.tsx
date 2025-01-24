const news = [
  {
    id: 1,
    title: 'Federal Reserve Announces Interest Rate Decision',
    time: '2 hours ago',
    source: 'Financial Times'
  },
  {
    id: 2,
    title: 'Tech Stocks Rally on Strong Earnings Reports',
    time: '4 hours ago',
    source: 'Reuters'
  },
  {
    id: 3,
    title: 'Market Analysis: Global Economic Outlook',
    time: '6 hours ago',
    source: 'Bloomberg'
  }
];

export default function MarketNews() {
  return (
    <div className="bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-white mb-4">Market News</h2>
      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.id} className="border-b border-gray-800 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-sm font-medium text-white">{item.title}</h3>
            <div className="mt-1 flex items-center text-xs text-gray-400">
              <span>{item.source}</span>
              <span className="mx-2">•</span>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
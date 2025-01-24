import AccountSummary from './components/AccountSummary';
import PortfolioChart from './components/PortfolioChart';
import Holdings from './components/Holdings';
import MarketNews from './components/MarketNews';
import InvestmentOpportunities from './components/InvestmentOpportunities';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Trading Dashboard</h1>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            New Trade
          </button>
        </div>
        
        <div className="space-y-6">
          <AccountSummary />
          
          <InvestmentOpportunities />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <PortfolioChart />
            </div>
            <div>
              <MarketNews />
            </div>
          </div>
          
          <Holdings />
        </div>
      </div>
    </main>
  );
}
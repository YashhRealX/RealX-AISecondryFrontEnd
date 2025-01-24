import { useState } from 'react';
import Image from 'next/image';

interface DealDetailsProps {
  company: {
    name: string;
    logo: string;
    code: string;
    type: string;
    location: string;
  };
}

export default function DealDetails({ company }: DealDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  
  const pricePerLot = 23895.00;
  const transactionFeePercent = 2;
  const stampDutyPercent = 0.375;
  
  const totalInvestment = pricePerLot * quantity;
  const transactionFee = (totalInvestment * transactionFeePercent) / 100;
  const stampDuty = (totalInvestment * stampDutyPercent) / 100;
  const totalPurchaseValue = totalInvestment + transactionFee + stampDuty;

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                  {company.logo}
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">{company.name}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                    <span>{company.code}</span>
                    <span>•</span>
                    <span>{company.type}</span>
                    <span>•</span>
                    <span>{company.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Financials</h2>
                <button className="text-gray-400 hover:text-white">News</button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-gray-400">Face Value</span>
                  <p className="text-xl font-semibold text-white">₹ 10.00</p>
                </div>
                <div>
                  <span className="text-gray-400">Price per share</span>
                  <p className="text-xl font-semibold text-white">₹ 23,895.00</p>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-gray-400">Available on</span>
                <div className="flex gap-4 mt-2">
                  <div className="px-4 py-2 bg-gray-800 rounded-lg text-white">NSDL</div>
                  <div className="px-4 py-2 bg-gray-800 rounded-lg text-white">CDSL</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-6">Annual Reports</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['FY23', '2021', '2020', '2019'].map((year) => (
                  <div key={year} className="bg-gray-800 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-700">
                    <div className="text-gray-400 mb-2">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="text-white text-sm">Annual Report</div>
                    <div className="text-gray-400 text-sm">{year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Investment Calculator */}
          <div className="bg-gray-900 rounded-lg p-6 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Investment Calculator</h2>
              <span className="bg-green-900/50 text-green-400 px-3 py-1 rounded-full text-sm">
                Available now
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Price per lot</span>
                  <span className="text-white">₹ {pricePerLot.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="bg-gray-800 text-white text-center w-16 p-2 rounded-lg"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">No. of shares</span>
                  <span className="text-white">{quantity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total investment</span>
                  <span className="text-white">₹ {totalInvestment.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Transaction fee (2%)</span>
                  <span className="text-white">₹ {transactionFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Stamp duty and GST</span>
                  <span className="text-white">₹ {stampDuty.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold pt-2 border-t border-gray-800">
                  <span className="text-gray-400">Total purchase value</span>
                  <span className="text-white">₹ {totalPurchaseValue.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 mt-6">
                Verify Profile to Invest
              </button>

              <div className="flex items-center gap-2 text-sm text-gray-400 mt-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>Balance: ₹ 0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
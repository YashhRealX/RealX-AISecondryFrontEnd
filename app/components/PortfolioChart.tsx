'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 100000 },
  { name: 'Feb', value: 105000 },
  { name: 'Mar', value: 102000 },
  { name: 'Apr', value: 108000 },
  { name: 'May', value: 115000 },
  { name: 'Jun', value: 112000 },
  { name: 'Jul', value: 124000 },
];

export default function PortfolioChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow h-[400px]">
      <h2 className="text-lg font-semibold text-white mb-4">Portfolio Performance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '0.375rem',
              color: '#F3F4F6'
            }}
          />
          <Line type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
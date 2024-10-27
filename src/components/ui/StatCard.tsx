import React from 'react';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  trend: number;
  icon: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, trend, icon }) => {
  const isPositive = trend > 0;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          {icon}
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
          <span className="text-sm font-medium">{Math.abs(trend)}%</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm text-gray-500 mt-1">{title}</p>
    </div>
  );
};
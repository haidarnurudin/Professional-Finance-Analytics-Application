import React from 'react';
import { BarChart3 } from 'lucide-react';

interface ChartData {
  label: string;
  value: number;
}

interface RevenueChartProps {
  data: ChartData[];
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Revenue Overview</h3>
          <p className="text-sm text-gray-500 mt-1">Weekly performance</p>
        </div>
        <BarChart3 className="text-gray-400 w-6 h-6" />
      </div>
      
      <div className="h-64">
        <div className="h-full flex items-end justify-between gap-2">
          {data.map((item, index) => (
            <div key={index} className="relative group flex-1">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                ${item.value.toLocaleString()}
              </div>
              <div
                className="bg-blue-500 rounded-t-lg transition-all group-hover:bg-blue-600"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-4 text-sm text-gray-500">
        {data.map((item, index) => (
          <span key={index}>{item.label}</span>
        ))}
      </div>
    </div>
  );
};
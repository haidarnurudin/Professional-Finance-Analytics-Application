import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter, Printer, Calculator } from 'lucide-react';

const reportTypes = [
  {
    id: 'financial',
    title: 'Financial Summary',
    description: 'Complete overview of revenue, expenses, and profit margins',
    icon: <FileText className="w-5 h-5" />
  },
  {
    id: 'transactions',
    title: 'Transaction History',
    description: 'Detailed list of all transactions with filtering options',
    icon: <Filter className="w-5 h-5" />
  },
  {
    id: 'tax',
    title: 'Tax Report',
    description: 'Tax-related transactions and calculations for compliance',
    icon: <Calculator className="w-5 h-5" />
  }
];

export const Reports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState('financial');
  const [dateRange, setDateRange] = useState('last30');

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Generate Report</h1>
        <p className="mt-2 text-gray-600">Create and download detailed financial reports</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Report Type</h2>
            <div className="space-y-4">
              {reportTypes.map((type) => (
                <div
                  key={type.id}
                  className={`flex items-start space-x-4 p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedReport === type.id ? 'bg-blue-50 border-2 border-blue-500' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedReport(type.id)}
                >
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-500">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{type.title}</h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Date Range</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['last7', 'last30', 'last90', 'custom'].map((range) => (
                <button
                  key={range}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                    dateRange === range
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setDateRange(range)}
                >
                  {range === 'last7' && 'Last 7 Days'}
                  {range === 'last30' && 'Last 30 Days'}
                  {range === 'last90' && 'Last 90 Days'}
                  {range === 'custom' && 'Custom Range'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Actions</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              <Download className="w-4 h-4" />
              <span>Download Report</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              <Printer className="w-4 h-4" />
              <span>Print Report</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Schedule Report</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
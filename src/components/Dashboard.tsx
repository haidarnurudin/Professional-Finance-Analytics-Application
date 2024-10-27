import React from 'react';
import { DollarSign, Users, Wallet, TrendingUp } from 'lucide-react';
import { StatCard } from './ui/StatCard';
import { TransactionList } from './ui/TransactionList';
import { RevenueChart } from './ui/RevenueChart';

const mockTransactions = [
  {
    id: '1',
    name: 'Client Payment - ABC Corp',
    amount: 12500,
    type: 'income' as const,
    category: 'Payment',
    date: '2024-03-14',
    status: 'completed' as const,
  },
  {
    id: '2',
    name: 'Office Supplies',
    amount: 350,
    type: 'expense' as const,
    category: 'Operations',
    date: '2024-03-13',
    status: 'completed' as const,
  },
  {
    id: '3',
    name: 'Client Payment - XYZ Ltd',
    amount: 8750,
    type: 'income' as const,
    category: 'Payment',
    date: '2024-03-12',
    status: 'pending' as const,
  },
  {
    id: '4',
    name: 'Software Subscription',
    amount: 499,
    type: 'expense' as const,
    category: 'Software',
    date: '2024-03-11',
    status: 'failed' as const,
  },
];

const chartData = [
  { label: 'Mon', value: 15000 },
  { label: 'Tue', value: 12000 },
  { label: 'Wed', value: 25000 },
  { label: 'Thu', value: 18000 },
  { label: 'Fri', value: 32000 },
  { label: 'Sat', value: 8000 },
  { label: 'Sun', value: 28000 },
];

export const Dashboard: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value="$84,254"
          trend={12.5}
          icon={<DollarSign className="w-6 h-6 text-blue-500" />}
        />
        <StatCard
          title="Total Expenses"
          value="$45,234"
          trend={-3.2}
          icon={<Wallet className="w-6 h-6 text-blue-500" />}
        />
        <StatCard
          title="Active Clients"
          value="1,234"
          trend={5.3}
          icon={<Users className="w-6 h-6 text-blue-500" />}
        />
        <StatCard
          title="Growth Rate"
          value="23.5%"
          trend={2.4}
          icon={<TrendingUp className="w-6 h-6 text-blue-500" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={chartData} />
        <TransactionList transactions={mockTransactions} />
      </div>
    </main>
  );
};
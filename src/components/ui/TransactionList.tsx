import React from 'react';
import { Transaction } from '../../types';
import { formatCurrency } from '../../utils/format';

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
        <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">View All</button>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-2 h-2 rounded-full ${
                transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500'
              }`} />
              <div>
                <p className="font-medium text-gray-900">{transaction.name}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-semibold ${
                transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
              </p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {transaction.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
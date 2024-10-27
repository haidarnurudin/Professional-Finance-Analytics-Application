export interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface FinancialMetric {
  title: string;
  value: number;
  trend: number;
  icon: string;
}
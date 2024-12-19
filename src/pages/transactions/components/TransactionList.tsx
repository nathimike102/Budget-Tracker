import { useState } from 'react';
import { format } from 'date-fns';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TransactionListProps {
  filters: {
    dateRange: string;
    type: string;
    category: string;
  };
}

export default function TransactionList({ filters }: TransactionListProps) {
  const [transactions] = useState([
    {
      id: 1,
      type: 'expense',
      amount: 120.50,
      description: 'Grocery Shopping',
      category: 'Food',
      date: new Date(),
    },
    // Add more mock transactions
  ]);

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(transaction.date, 'MMM d, yyyy')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                  <span className="flex items-center justify-end gap-1">
                    {transaction.type === 'expense' ? (
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    )}
                    <span
                      className={cn(
                        'font-medium',
                        transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'
                      )}
                    >
                      ${transaction.amount.toFixed(2)}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
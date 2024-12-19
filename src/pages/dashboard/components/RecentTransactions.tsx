import { format } from 'date-fns';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const transactions = [
  {
    id: 1,
    name: 'Grocery Shopping',
    type: 'expense',
    amount: 120.50,
    date: new Date('2024-02-28'),
    category: 'Food',
  },
  {
    id: 2,
    name: 'Salary Deposit',
    type: 'income',
    amount: 4200.00,
    date: new Date('2024-02-25'),
    category: 'Salary',
  },
  // Add more mock transactions
];

export default function RecentTransactions() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Recent Transactions
        </h3>
        <div className="mt-6 flow-root">
          <ul role="list" className="-my-5 divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="py-5">
                <div className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {transaction.type === 'expense' ? (
                      <ArrowDownRight className="h-6 w-6 text-red-500" />
                    ) : (
                      <ArrowUpRight className="h-6 w-6 text-green-500" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {transaction.name}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {transaction.category}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <div className="flex flex-col items-end">
                      <p
                        className={cn(
                          'text-sm font-medium',
                          transaction.type === 'expense'
                            ? 'text-red-500'
                            : 'text-green-500'
                        )}
                      >
                        {transaction.type === 'expense' ? '-' : '+'}$
                        {transaction.amount.toFixed(2)}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {format(transaction.date, 'MMM d, yyyy')}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
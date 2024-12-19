import { useState } from 'react';
import TransactionList from './components/TransactionList';
import TransactionFilters from './components/TransactionFilters';
import { Download } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function TransactionsPage() {
  const [filters, setFilters] = useState({
    dateRange: 'all',
    type: 'all',
    category: 'all',
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Transactions</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <TransactionFilters filters={filters} onFilterChange={setFilters} />
      <TransactionList filters={filters} />
    </div>
  );
}
import { Suspense } from 'react';
import BalanceSummary from './components/BalanceSummary';
import RecentTransactions from './components/RecentTransactions';
import QuickActions from './components/QuickActions';
import SpendingChart from './components/SpendingChart';
import { Loader } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      
      <BalanceSummary />
      <QuickActions />
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Suspense fallback={<LoadingSpinner />}>
          <SpendingChart />
          <RecentTransactions />
        </Suspense>
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader className="h-8 w-8 animate-spin text-blue-600" />
    </div>
  );
}
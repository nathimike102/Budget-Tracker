import Button from '@/components/ui/Button';
import { Plus, Download, Upload, Filter } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Button className="inline-flex items-center gap-x-2">
        <Plus className="h-5 w-5" />
        Add Expense
      </Button>
      <Button className="inline-flex items-center gap-x-2" variant="secondary">
        <Upload className="h-5 w-5" />
        Add Income
      </Button>
      <Button className="inline-flex items-center gap-x-2" variant="outline">
        <Download className="h-5 w-5" />
        Export Report
      </Button>
      <Button className="inline-flex items-center gap-x-2" variant="outline">
        <Filter className="h-5 w-5" />
        Filter View
      </Button>
    </div>
  );
}
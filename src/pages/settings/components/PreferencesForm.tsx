import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';

export default function PreferencesForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      currency: 'USD',
      language: 'en',
      theme: 'light',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Preferences updated:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900">Preferences</h2>
      
      <div className="grid gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Currency</label>
          <select
            {...register('currency')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Language</label>
          <select
            {...register('language')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Theme</label>
          <select
            {...register('theme')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
      </div>

      <Button type="submit">Save Preferences</Button>
    </form>
  );
}
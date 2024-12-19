import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import PreferencesForm from './components/PreferencesForm';
import NotificationSettings from './components/NotificationSettings';
import SecuritySettings from './components/SecuritySettings';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid gap-8">
        <PreferencesForm />
        <NotificationSettings />
        <SecuritySettings />
      </div>
    </div>
  );
}
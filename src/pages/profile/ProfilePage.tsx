import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';
import ProfileForm from './components/ProfileForm';
import ActivityLog from './components/ActivityLog';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your personal information and account settings
        </p>
      </div>

      <div className="grid gap-8">
        <ProfileForm user={user} />
        <ActivityLog userId={user.id} />
      </div>
    </div>
  );
}
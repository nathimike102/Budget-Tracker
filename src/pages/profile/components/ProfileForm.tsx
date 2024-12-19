import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import { User } from '@/types';

interface ProfileFormProps {
  user: User;
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      displayName: user.displayName || '',
      email: user.email,
    },
  });

  const onSubmit = (data: any) => {
    console.log('Profile updated:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-6">
        <div className="relative">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'Profile'}
              className="h-20 w-20 rounded-full object-cover"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-2xl font-medium text-gray-600">
                {user.email[0].toUpperCase()}
              </span>
            </div>
          )}
          <Button
            type="button"
            variant="outline"
            className="absolute bottom-0 right-0 rounded-full p-1"
          >
            Edit
          </Button>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900">Profile Picture</h3>
          <p className="text-sm text-gray-500">
            Update your profile picture
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Display Name
          </label>
          <input
            type="text"
            {...register('displayName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            disabled
          />
        </div>
      </div>

      <Button type="submit">Save Changes</Button>
    </form>
  );
}
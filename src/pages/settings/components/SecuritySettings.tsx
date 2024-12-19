import { useState } from 'react';
import Button from '@/components/ui/Button';
import { Shield, Key } from 'lucide-react';

export default function SecuritySettings() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Security</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-gray-400" />
              <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
            </div>
            <button
              type="button"
              onClick={() => setTwoFactorEnabled(prev => !prev)}
              className={`${
                twoFactorEnabled ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
            >
              <span
                className={`${
                  twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
              />
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Add an extra layer of security to your account
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-gray-400" />
            <h3 className="text-sm font-medium text-gray-900">Change Password</h3>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Update your password regularly to keep your account secure
          </p>
          <Button variant="outline" className="mt-4">
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    monthly: true,
    weekly: false,
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Notifications</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
            <p className="text-sm text-gray-500">Receive updates via email</p>
          </div>
          <button
            type="button"
            onClick={() => setNotifications(prev => ({ ...prev, email: !prev.email }))}
            className={`${
              notifications.email ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
          >
            <span
              className={`${
                notifications.email ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
            <p className="text-sm text-gray-500">Receive notifications in browser</p>
          </div>
          <button
            type="button"
            onClick={() => setNotifications(prev => ({ ...prev, push: !prev.push }))}
            className={`${
              notifications.push ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
          >
            <span
              className={`${
                notifications.push ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
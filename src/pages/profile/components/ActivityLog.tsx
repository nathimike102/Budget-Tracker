import { format } from 'date-fns';

interface ActivityLogProps {
  userId: string;
}

export default function ActivityLog({ userId }: ActivityLogProps) {
  const activities = [
    {
      id: 1,
      type: 'login',
      date: new Date(),
      details: 'Logged in from Chrome on Windows',
    },
    {
      id: 2,
      type: 'profile_update',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000),
      details: 'Updated profile information',
    },
    // Add more activities as needed
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Activity Log</h2>
      
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                      <span className="text-white text-sm">
                        {activity.type === 'login' ? '👤' : '✏️'}
                      </span>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">{activity.details}</p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      {format(activity.date, 'MMM d, yyyy HH:mm')}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
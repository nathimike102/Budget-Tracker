import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', amount: 0 },
  { name: 'Feb', amount: 0 },
  { name: 'Mar', amount: 0 },
  { name: 'Apr', amount: 0 },
  { name: 'May', amount: 0 },
  { name: 'Jun', amount: 0 },
  { name: 'Jul', amount: 0 },
  { name: 'Aug', amount: 0 },
  { name: 'Sep', amount: 0 },
  { name: 'Oct', amount: 0 },
  { name: 'Nov', amount: 0 },
  { name: 'Dec', amount: 0 },
];

export default function SpendingChart() {
  return (
    <div className="mt-6 overflow-hidden rounded-lg bg-white shadow">
      <div className="p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Monthly Spending
        </h3>
        <div className="mt-6" style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
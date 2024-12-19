import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthForm from './components/auth/AuthForm';
import { useAuthStore } from './store/authStore';

const queryClient = new QueryClient();

function App() {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          {!user ? (
            <div className="flex items-center justify-center min-h-screen">
              <AuthForm />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<div>Dashboard (Coming soon)</div>} />
              {/* Add more routes here */}
            </Routes>
          )}
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
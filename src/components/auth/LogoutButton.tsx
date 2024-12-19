import { useNavigate } from 'react-router-dom';
import { logout } from '@/lib/auth';
import Button from '@/components/ui/Button';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      className="text-red-600 hover:text-red-700 hover:bg-red-50"
    >
      <LogOut className="h-5 w-5 mr-2" />
      Logout
    </Button>
  );
}
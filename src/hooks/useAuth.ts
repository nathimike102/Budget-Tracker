import { useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { useAuthStore } from '@/store/authStore';
import { onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          id: user.uid,
          email: user.email || '',
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  return useAuthStore();
}
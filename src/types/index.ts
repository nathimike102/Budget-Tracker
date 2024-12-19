export interface User {
  id: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: Date;
  isRecurring: boolean;
  recurringFrequency?: 'weekly' | 'monthly' | 'yearly';
}

export interface Budget {
  id: string;
  userId: string;
  category: string;
  amount: number;
  month: number;
  year: number;
}

export interface Category {
  id: string;
  userId: string;
  name: string;
  type: 'income' | 'expense';
  color: string;
}
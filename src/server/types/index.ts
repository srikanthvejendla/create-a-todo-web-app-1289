export interface User {
  id: string;
  email: string;
  password_hash: string;
  created_at: string;
}

export interface Category {
  id: string;
  user_id: string;
  name: string;
  created_at: string;
}

export interface Task {
  id: string;
  user_id: string;
  title: string;
  description: string;
  due_date: string | null;
  completed: boolean;
  created_at: string;
  updated_at: string;
  categories?: Category[];
}

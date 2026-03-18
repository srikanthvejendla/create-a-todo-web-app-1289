import axios from 'axios';

export async function fetchCategories() {
  const { data } = await axios.get('/api/categories');
  return data;
}

export async function fetchTasks(params: Record<string, any> = {}) {
  const { data } = await axios.get('/api/tasks', { params });
  return data;
}

export async function fetchTask(id: string) {
  const { data } = await axios.get(`/api/tasks/${id}`);
  return data;
}

export async function createTask(task: any) {
  const { data } = await axios.post('/api/tasks', task);
  return data;
}

export async function updateTask(id: string, updates: any) {
  const { data } = await axios.put(`/api/tasks/${id}`, updates);
  return data;
}

export async function deleteTask(id: string) {
  await axios.delete(`/api/tasks/${id}`);
}

export async function createCategory(category: any) {
  const { data } = await axios.post('/api/categories', category);
  return data;
}

export async function updateCategory(id: string, updates: any) {
  const { data } = await axios.put(`/api/categories/${id}`, updates);
  return data;
}

export async function deleteCategory(id: string) {
  await axios.delete(`/api/categories/${id}`);
}

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTask } from '../lib/api';

const TaskDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: task, isLoading, error } = useQuery({
    queryKey: ['task', id],
    queryFn: () => fetchTask(id!),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !task) return <div className="text-danger">Task not found</div>;

  return (
    <div className="max-w-xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-4 text-primary hover:underline">← Back</button>
      <div className="bg-surface p-6 rounded shadow-md border border-border">
        <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
        <div className="mb-2 text-muted">Due: {task.due_date ? new Date(task.due_date).toLocaleDateString() : 'No due date'}</div>
        <div className="mb-4 whitespace-pre-line">{task.description}</div>
        <div className="flex gap-2">
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition">Edit</button>
          <button className="bg-danger text-white px-4 py-2 rounded hover:bg-danger/90 transition">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailPage;

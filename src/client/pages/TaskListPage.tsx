import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from '../lib/api';
import TaskItem from '../components/tasks/TaskItem';
import FloatingActionButton from '../components/tasks/FloatingActionButton';

const TaskListPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get('category');
  const q = searchParams.get('q');

  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ['tasks', { category, q }],
    queryFn: () => fetchTasks({ category, q }),
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      {isLoading && <div>Loading...</div>}
      {error && <div className="text-danger">Error loading tasks</div>}
      <ul className="space-y-2">
        {tasks?.map((task: any) => (
          <TaskItem key={task.id} task={task} onClick={() => navigate(`/tasks/${task.id}`)} />
        ))}
      </ul>
      <FloatingActionButton onClick={() => navigate('/tasks/new')} label="Add Task" />
    </div>
  );
};

export default TaskListPage;

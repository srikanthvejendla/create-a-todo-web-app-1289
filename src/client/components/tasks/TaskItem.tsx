import React from 'react';

interface TaskItemProps {
  task: any;
  onClick?: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onClick }) => {
  return (
    <li
      className={`flex items-center justify-between px-4 py-3 bg-surface rounded shadow-sm border border-border cursor-pointer hover:bg-primary/5 transition ${task.completed ? 'opacity-60 line-through' : ''}`}
      onClick={onClick}
      tabIndex={0}
      aria-label={`Task: ${task.title}`}
    >
      <div>
        <div className="font-semibold text-lg">{task.title}</div>
        <div className="text-sm text-muted">Due: {task.due_date ? new Date(task.due_date).toLocaleDateString() : 'No due date'}</div>
      </div>
      <div className="flex items-center gap-2">
        {task.completed && <span className="text-primary font-bold">✓</span>}
      </div>
    </li>
  );
};

export default TaskItem;

import React from 'react';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  // TODO: Fetch tasks from API
  return (
    <ul className="space-y-2">
      <TaskItem />
      <li className="text-muted">(No tasks yet)</li>
    </ul>
  );
};

export default TaskList;

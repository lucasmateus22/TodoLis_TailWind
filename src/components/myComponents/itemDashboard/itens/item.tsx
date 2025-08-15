// src/components/TaskItem.tsx
import { Circle, CircleCheckBig } from 'lucide-react';
import React from 'react';
import type { Task } from "@/types";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete }) => {
  return (
    <li
      key={task.id}
      className="flex items-center justify-between p-2 rounded-md cursor-pointer"
      onClick={() => onToggleComplete(task.id)}
    >
      <div className="flex items-center gap-2">
        {task.completed ? <CircleCheckBig /> : <Circle />}
        <span className={task.completed ? "line-through text-gray-500" : ""}>
          {task.text}
        </span>
      </div>
    </li>
  );
};

export default TaskItem;
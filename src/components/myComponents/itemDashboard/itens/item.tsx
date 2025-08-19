import { Circle, CircleCheckBig, Trash2 } from 'lucide-react';
import React from 'react';
import type { Task } from "@/types";


interface TaskItemProps {
    task: Task;
    handleToggleTask: (id: string) => void;
    handleDeleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, handleToggleTask, handleDeleteTask }) => {
    return (
        <li
            className={`flex flex-row justify-between 
            h-[25%]  rounded-xl min-w-[100%] max-w-[30%] p-3 
            cursor-pointer relative group
            ${task.completed ? '!bg-teal-950' : 'bg-zinc-600'}`}
            key={task.id}
            onClick={() => handleToggleTask(task.id)}
        >
            <div className="flex flex-row gap-2 items-center">
                {task.completed ? <CircleCheckBig /> : <Circle />}
                <span className="truncate">{task.text}</span>
            </div>
            <div onClick={() =>handleDeleteTask(task.id)}>
                <Trash2 />
            </div>
        </li>
    );
};

export default TaskItem;
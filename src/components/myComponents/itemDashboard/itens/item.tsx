import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    TableRow,
    TableCell,
} from "@/components/ui/table"
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
        <TableRow
            className={`p-3 
            cursor-pointer 
            ${task.completed ? '!bg-teal-950' : 'bg-zinc-600'}`}
            key={task.id}
            onClick={() => handleToggleTask(task.id)}
        >
            <TableCell className="w-[15%]">
                {task.completed ? <CircleCheckBig /> : <Circle />}
            </TableCell>
            <TableCell className="w-[75%] gap-2 items-center">
                <HoverCard>
                    <HoverCardTrigger className="flex items-center gap-2">
                        <div className="text-[1.2rem] text-gray-300">{task.text}</div>
                    </HoverCardTrigger >
                    <HoverCardContent>
                        {task.text}
                    </HoverCardContent>
                </HoverCard >
            </TableCell>
            <TableCell onClick={() => handleDeleteTask(task.id)} className='w-[15%]'>
                <div className="flex justify-center align-center rounded-full bg-red-500 w-[45%] p-1 hover:bg-red-600 transition-colors duration-200">
                    <Trash2 />
                </div>
            </TableCell>
        </TableRow>
    );
};

export default TaskItem;
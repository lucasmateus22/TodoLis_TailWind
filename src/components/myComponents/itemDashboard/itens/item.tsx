import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    TableRow,
    TableCell,
} from "@/components/ui/table"
import { Trash2 } from 'lucide-react';
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
            key={task.id}
            onClick={() => handleToggleTask(task.id)}
            className={`
            cursor-pointer select-none p-2
            !h-[40px] md:!h-[50px]
            ${task.completed ? '!bg-blue-900' : 'bg-gray-200'}
        `}
        >
            {/* Coluna Nome da Task */}
            <TableCell
                className="flex justify-center items-center w-[100%] md:w-[100%] gap-2 h-[50px] p-0 text-wrap"
            >
                <HoverCard>
                    <HoverCardTrigger className="flex items-center justify-center gap-2 w-full">
                        <div
                            className={`text-center text-[1rem] md:text-[1.1rem] ${task.completed ? 'text-white' : 'text-stone-600'
                                }`}
                        >
                            {task.text}
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto max-w-[310px] h-full">
                        {task.completed && task.timeCompleted ? (
                            <p>
                                add {task.date}, completed in {task.timeCompleted}
                            </p>
                        ) : (
                            <p>Task incomplete</p>
                        )}
                    </HoverCardContent>
                </HoverCard>
            </TableCell>

            {/* Coluna Info (visível só no desktop) */}
            <TableCell
                className="hidden md:table-cell w-[35%] text-center"
            >
                <HoverCard>
                    <HoverCardTrigger className="flex flex-col items-center justify-center gap-1 w-full">
                        <div
                            className={`text-[0.9rem] ${task.completed ? 'text-white' : 'text-stone-600'
                                }`}
                        >
                            {task.time}
                        </div>
                        {task.completed && task.timeCompleted && (
                            <span className="text-gray-400 text-[0.8rem]">
                                {task.timeCompleted}
                            </span>
                        )}
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto max-w-[310px] h-full">
                        {task.completed ? 'Completed' : 'Incomplete'}
                    </HoverCardContent>
                </HoverCard>
            </TableCell>

            {/* Coluna Delete */}
            <TableCell
                onClick={() => handleDeleteTask(task.id)}
                className="flex flex-col justify-center items-center w-[100%] md:w-[100%] h-[35px]"
            >
                <div className="flex justify-center items-center rounded-full bg-red-800 w-[50px] h-[50px] p-1 
                    hover:bg-red-600 transition-colors duration-200">
                    <Trash2 className="w-4 text-white" />
                </div>
            </TableCell>
        </TableRow>

    );
};

export default TaskItem;
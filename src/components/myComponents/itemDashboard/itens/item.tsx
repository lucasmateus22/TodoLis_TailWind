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
            className={`p-2 !h-[20px]
            cursor-pointer 
            ${task.completed ? '!bg-teal-950' : 'bg-zinc-400'}`}
            key={task.id}
            onClick={() => handleToggleTask(task.id)}
        >
            <TableCell className={`w-[15%] pl-5 ${task.completed ? 'text-white' : 'text-stone-600'} !h-[35px]`}>
                {task.completed ? <CircleCheckBig /> : <Circle />}
            </TableCell>
            <TableCell className="w-[35%] max-w-[35%] gap-2 items-center h-[35px] ">
                <HoverCard>
                    <HoverCardTrigger className="flex items-center justify-center gap-2 max-w-[100%]">
                        <div className={`text-[1.2rem] ${task.completed ? 'text-white' : 'text-stone-600'} text-cente`}>{task.text}</div>
                    </HoverCardTrigger >
                    <HoverCardContent className="w-auto max-w-[310px] h-full">
                        {task.completed && task.timeCompleted ? 
                            <span>
                                <p>add {task.text} as {task.time} in{task.timeCompleted}</p>
                            </span>
                        : <p>Task incomplete</p>}
                    </HoverCardContent>
                </HoverCard >
            </TableCell>
            <TableCell className="flex justify-center !w-[100%] gap-2 items-center h-[100%]">
                <div className={`text-[1.2rem] ${task.completed ? 'text-white' : 'text-stone-600'} text-center`}>{task.time}</div>
                {task.completed && task.timeCompleted && (
                    <span>
                        ✔ {task.timeCompleted}
                    </span>
                )}
            </TableCell>
            <TableCell onClick={() => handleDeleteTask(task.id)} className='w-[15%] !h-[35px]'>
                <div className="flex justify-center align-center rounded-full bg-red-500 w-[35px] h-[35px] p-1 hover:bg-red-600 transition-colors duration-200">
                    <Trash2 className="w-4" />
                </div>
            </TableCell>
        </TableRow>
    );
};

export default TaskItem;
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import type { Task } from "@/types";
import TaskItem from "./item"; 

export default function ToList() {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);
    const section1Limit = 50;

    const handleAddTask = () => {
        if (taskText.trim() === "") {
            console.error("Task text cannot be empty");
            return;
        }
        const newTask: Task = {
            id: Date.now().toString(),
            text: taskText,
            completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTaskText("");
    };

    const handleDeleteAllTasks = () => {
        setTasks([]);
    };

        const handleToggleTask = (id: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

        const handleDeleteTask = (id: string) => {
        setTasks (prevTasks => prevTasks.filter(task => task.id !== id))
    }

    const section1Tasks = tasks.slice(0, section1Limit);

    return (
        <div className="w-full h-full flex flex-row items-start justify-start gap-2">
            <Card className="w-[25%] max-w-sm min-h-[90%] min-w-[200px]">
                <CardHeader>
                    <CardTitle>To do list</CardTitle>
                    <CardDescription>
                        Add your tasks here and manage them efficiently.
                    </CardDescription>
                    <CardAction />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="task">Task</Label>
                            <Input
                                id="task"
                                type="text" 
                                placeholder="item"
                                required
                                value={taskText}
                                onChange={(e) => setTaskText(e.target.value)}
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="justify-around flex-row gap-2 flex-wrap">
                    <Button onClick={handleDeleteAllTasks} className="w-35 !bg-zinc-600" variant="destructive">
                        Delete All Tasks
                    </Button>
                    {/* Botão para adicionar a tarefa */}
                    <Button onClick={handleAddTask} className="w-35 text-white !bg-teal-950 hover:" variant="outline">
                        Add Task
                    </Button>
                </CardFooter>
            </Card>
            <section className="w-[74%] h-[90%] rounded-xl p-4 overflow-y-auto">
                <ul className="text-white flex flex-row flex-wrap gap-2">
                    {section1Tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            handleToggleTask={handleToggleTask}
                            handleDeleteTask={handleDeleteTask}
                        />
                    ))}
                </ul>
            </section>
        </div>
    );
}
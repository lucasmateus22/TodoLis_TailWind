import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { useState } from 'react';
import type { Task } from "@/types";
import TaskItem from "./item";
import { CrudApi } from "@/features/hooks/crudApi"

export default function ToList() {

    const { tasks, loading, addTask, handleDeleteTask, handleToggleTask, handleDeleteAllTasks } = CrudApi()
    const [taskText, setTaskText] = useState("");
    const section1Limit = 50;

    const section1Tasks = tasks.slice(0, section1Limit);

    const handleAddTask = () => {
        addTask(taskText);
        setTaskText("");
    };

    return (
        <div className="w-full h-full flex flex-row items-start justify-start gap-2">
            <Card className="w-[25%] max-w-sm min-w-[300px] mt-28">
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
                                placeholder="Task"
                                required
                                value={taskText}
                                onChange={(e) => setTaskText(e.target.value)}
                                maxLength={50}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="justify-around flex-col gap-2 flex-wrap">
                    <Button onClick={handleAddTask} className="w-35 text-white !bg-teal-950 hover:" variant="outline">
                        Add Task
                    </Button>
                    <Button onClick={handleDeleteAllTasks} className="w-35 !bg-zinc-600" variant="destructive">
                        Delete All Tasks
                    </Button>
                </CardFooter>
            </Card>

            <section className="w-[74%] h-[90%] max-h-[570px] rounded-[27px] overflow-y-auto">
                {loading ? (
                    <p className="ml-50">Carregando tarefas...</p>
                ) : (
                    <Table className="w-[100%] bg-teal-900">
                        <TableHeader className="rounded-lg bg-teal-900 sticky top-0 z-10">
                            <TableRow>
                                <TableHead className="w-[15%] text-white text-center">Completed</TableHead>
                                <TableHead className="w-[70%] text-white">Task name</TableHead>
                                <TableHead className="w-[15%] text-white">Delete</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-white">
                            <TableRow className="!bg-neutral-100 !h-[20px] !w-[250px]">
                                <TableCell className="h-[70px]"></TableCell>
                                <TableCell className="h-[70px]"></TableCell>
                                <TableCell className="h-[70px]"></TableCell>
                            </TableRow>
                            {section1Tasks.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    handleToggleTask={handleToggleTask}
                                    handleDeleteTask={handleDeleteTask}
                                />
                            ))}
                        </TableBody>
                    </Table>
                )}
            </section>
        </div>
    );
}
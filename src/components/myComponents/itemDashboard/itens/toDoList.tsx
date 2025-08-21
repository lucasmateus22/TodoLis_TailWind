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
    TableHead,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { useState } from 'react';
import TaskItem from "./item";
import { CrudApi } from "@/features/hooks/crudApi"

export default function ToList() {

    const { tasks, loading, addTask, handleDeleteTask, handleToggleTask, handleDeleteAllTasks } = CrudApi()
    const [taskText, setTaskText] = useState("");
    const section1Limit = 50;

    const section1Tasks = tasks.slice(0, section1Limit);

    const handleAddTask = () => {
        addTask(taskText); // Passa taskText como um argumento
        setTaskText(""); // Limpa o campo de entrada aqui, no componente
    };

    return (
        <div className="w-full h-full flex flex-row items-start justify-start gap-2">
            <Card className="w-[25%] max-w-sm min-w-[300px] mt-38">
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
                                maxLength={50}
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
            <section className="w-[74%] h-[90%] rounded-xl p-4 overflow-y-auto">
                {loading ? (
                    <p>Carregando tarefas...</p>
                ) : (
                    <Table className="w-[100%] min-h-[300px] !bg-teal-900">
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader className="bg-teal-900 !mb-4">
                            <TableRow>
                                <TableHead className="w-[15%] text-white">Completed</TableHead>
                                <TableHead className="w-[70%] text-white">Task name</TableHead>
                                <TableHead className="w-[15%] text-white">Delete</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-white !bg-teal-900 max-h-[250px] w-[100%]">
                            <TableRow className="!bg-white !h-[55px] !w-[250px]">
                                <TableCell className="h-[50px]"></TableCell>
                                <TableCell className="h-[50px]"></TableCell>
                                <TableCell className="h-[50px]"></TableCell>
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
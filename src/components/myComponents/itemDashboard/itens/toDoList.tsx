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
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { useState } from 'react';
import TaskItem from "./item";
import { CrudApi } from "@/features/hooks/crudApi"
import AlertList from "./alertList"

export default function ToList() {

    const { tasks, loading, addTask, handleDeleteTask, handleToggleTask, handleDeleteAllTasks } = CrudApi()
    const [errorMessage, setErrorMessage] = useState("")
    const [concluedMessage, setConcluedMessage] = useState("")
    const [taskText, setTaskText] = useState("");
    const [taskTime, setTaskTime] = useState("");


    const section1Limit = 50;
    const sectionTasks = tasks.slice(0, section1Limit);

    const handleAddTask = () => {
        if (!taskText.trim() || !taskTime.trim()) {
            setErrorMessage("Task text and time cannot be empty");
            return;
        }

        const newTaskDate = new Date();
        const dateString = newTaskDate.toLocaleDateString();

        setConcluedMessage(concluedMessage);
        setErrorMessage("");
        addTask(taskText, taskTime, dateString);
        clearIncomingData();
    };

    const handleCloseAlert = () => {
        setErrorMessage("")
        setConcluedMessage("")
    }

    const clearIncomingData = () => {
        setTaskText("");
        setTaskTime("");
    }

    return (

        <div className="flex flex-row items-start justify-center flex-wrap gap-2
                        w-full h-full md:gap-5">
            {errorMessage &&
                <AlertList title="Empty Input"
                    description="Task text and time cannot be empty"
                    onClose={handleCloseAlert} />
            }
            {concluedMessage &&
                <AlertList title="Conclued"
                    description="Task Completed, Congrulations!!"
                    onClose={handleCloseAlert} />
            }
            <Card className="w-[25%] max-w-sm min-w-[300px] !min-h-[300px] gap-2 
                            md:h-[38%] md:gap-5 bg-gray-700">
                <CardHeader>
                    <CardTitle>To do list</CardTitle>
                    <CardDescription>
                        Add your tasks here and manage them efficiently.
                    </CardDescription>
                    <CardAction />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-1">
                            <Label htmlFor="task">Task</Label>
                            <Input
                                id="task-text"
                                type="text"
                                placeholder="Task"
                                required
                                value={taskText}
                                onChange={(e) => setTaskText(e.target.value)}
                                maxLength={10}
                                autoComplete="off"
                            />
                            <Input
                                id="task-time"
                                type="time"
                                placeholder="Time"
                                required
                                value={taskTime}
                                onChange={(e) => setTaskTime(e.target.value)}
                                maxLength={4}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="justify-around flex-row gap-2">
                    <Button onClick={handleDeleteAllTasks} className="p-2 !bg-zinc-600" variant="destructive">
                        Delete All
                    </Button>
                    <Button onClick={handleAddTask} className="p-2 text-white">
                        Add Task
                    </Button>
                </CardFooter>
            </Card>
            <div className="h-[250px] min-h-[450px] 
            rounded-[17px] overflow-hidden min-w-[400px]
            md:bg-zinc-400 md:w-[70%] md:h-[45vh]">
                <section className="h-[250px] min-h-[450px] 
                rounded-[17px] overflow-y-scroll 
                md:bg-zinc-400 md:w-[100%] md:h-[45vh]
                max-h-100 overflow-y-auto
                [&::-webkit-scrollbar]:w-1
                [&::-webkit-scrollbar-track]:bg-teal-800
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    {loading ? (
                        <div className="flex justify-center align-center w-[100%] h-[100%]">
                            <h4>Carregando tarefas...</h4>
                        </div>
                    ) : (
                        <Table className="w-[100%]">
                            <TableHeader className="rounded-lg bg-emerald-950">
                                <TableRow>
                                    <TableHead className="w-[15%] text-white text-center">Completed</TableHead>
                                    <TableHead className="w-[35%] text-white text-center">Task name</TableHead>
                                    <TableHead className="w-[35%] text-white text-center">Task time / Time conclued</TableHead>
                                    <TableHead className="w-[15%] text-white">Delete</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="text-white">
                                {sectionTasks.map((task) => (
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
        </div>
    );
}
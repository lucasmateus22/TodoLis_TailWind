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
import { Separator } from "@/components/ui/separator";
import { Circle, CircleCheckBig } from "lucide-react";

export default function ToList() {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);
    // Removido: const [conclued, setConclued] = useState(false);
    // Removido: const changerStateTask = () => { ... }
    const section1Limit = 28;
    const section2Limit = 35;

    // Função para adicionar uma nova tarefa
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

    // Nova função para alternar o estado 'completed' de uma tarefa específica
    const handleToggleTask = (id: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Função para deletar todas as tarefas
    const handleDeleteAllTasks = () => {
        setTasks([]);
    };

    // Dividindo as tarefas para as duas seções
    const section1Tasks = tasks.slice(0, section1Limit);
    const section2Tasks = tasks.slice(section1Limit, section2Limit);

    return (
        <div className="w-full h-full flex flex-row items-start justify-start gap-2 flex-wrap">
            <Card className="w-[25%] max-w-sm h-[41%]">
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
                <CardFooter className="justify-around flex-row gap-2">
                    <Button onClick={handleDeleteAllTasks} className="w-35 !bg-zinc-600" variant="destructive">
                        Delete All Tasks
                    </Button>
                    <Button onClick={handleAddTask} className="w-35 text-white !bg-teal-950 hover:" variant="outline">
                        Add Task
                    </Button>
                </CardFooter>
            </Card>

            <section className="render-itens-side w-[74%] h-[41%] rounded-xl p-4">
                <ul className="text-white flex flex-row flex-wrap gap-2">
                    {section1Tasks.map((task) => (
                        // O onClick agora chama a função com o id da tarefa
                        <li className="flex flex-row align-center justify-around w-[12%] h-[25%] !bg-teal-950 rounded-xl p-3" key={task.id} onClick={() => handleToggleTask(task.id)}>
                            {/* O ícone é renderizado com base no estado individual da tarefa */}
                            {task.completed ? <CircleCheckBig /> : <Circle />}
                            {task.text}
                        </li>
                    ))}
                </ul>
            </section>
            <Separator />
            <section className="render-itens-side w-[100%] h-[55%] rounded-xl p-4" id="dash-itens-2">
                <ul className="text-white flex flex-row flex-wrap gap-2">
                    {section2Tasks.map((task) => (
                        // A lógica de click também é aplicada aqui
                        <li className="flex flex-row align-center justify-around w-[12%] h-[25%] !bg-teal-950 rounded-xl p-3" key={task.id} onClick={() => handleToggleTask(task.id)}>
                            <img src="" alt="img" />
                            {task.text}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
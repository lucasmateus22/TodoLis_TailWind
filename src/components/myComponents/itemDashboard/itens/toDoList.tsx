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

export default function ToList() {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);
    const section1Limit = 28;

    // Função para adicionar uma nova tarefa
    const handleAddTask = () => {
        // Verifica se o texto não está vazio
        if (taskText.trim() === "") {
            console.error("Task text cannot be empty");
            return;
        }

        // Cria a nova tarefa, garantindo que todas as propriedades da interface Task estejam presentes
        const newTask: Task = {
            id: Date.now().toString(),
            text: taskText,
        };

        // Adiciona a nova tarefa ao array de tasks
        setTasks((prevTasks) => [...prevTasks, newTask]);
        // Limpa o input após adicionar a tarefa
        setTaskText("");
    };

    // Função para deletar todas as tarefas
    const handleDeleteAllTasks = () => {
        setTasks([]);
    };

    // Dividindo as tarefas para as duas seções
    const section1Tasks = tasks.slice(0, section1Limit);
    const section2Tasks = tasks.slice(section1Limit);

    return (
        <div className="w-full h-full flex flex-row items-start justify-start gap-2 flex-wrap">
            <Card className="w-[25%] max-w-sm h-[41%]">
                <CardHeader>
                    <CardTitle>To do list</CardTitle>
                    <CardDescription>
                        Add your tasks here and manage them efficiently.
                    </CardDescription>
                    <CardAction>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="task">Task</Label>
                            <Input
                                id="task"
                                type="task"
                                placeholder="item"
                                required
                                value={taskText} // Conectando o valor do input ao estado
                                onChange={(e) => setTaskText(e.target.value)} // Atualizando o estado a cada mudança
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
            <section className="render-itens-side bg-black w-[74%] h-[41%] rounded-xl p-4" id="dash-itens-1">
                <ul className="text-white flex flex-row flex-wrap gap-2">
                    {section1Tasks.map((task) => (
                        <li className="flex flex-col w-[12%] h-[25%] !bg-red-500" key={task.id}>
                            <img src="" alt="img" />
                            {task.text},
                        </li>
                    ))}
                </ul>
            </section>
            <section className="render-itens-side bg-black w-[100%] h-[55%] rounded-xl p-4" id="dash-itens-2">
                <ul className="text-white  flex flex-row flex-wrap gap-2">
                    {section2Tasks.map((task) => (
                        <li className="flex flex-row w-[12%] h-[35%] !bg-red-500" key={task.id}>
                            <img src="" alt="img" />
                            {task.text},
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
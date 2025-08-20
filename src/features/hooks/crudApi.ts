import { useEffect, useState } from 'react';
import type { Task } from "@/types";

export const CrudApi = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = async (text: string) => {
        if (text.trim() === "") {
            console.error("Task text cannot be empty");
            return;
        }
        const newTask: Task = {
            id: Date.now().toString(),
            text: text,
            completed: false,
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(newTask),

            });
            if (response.ok) {
                fetchTasks();
            }
        } catch (error) {
            console.error("Error adding task:", error)
        }
    }

    const fetchTasks = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Error fetching tasks');
            }
            const data: Task[] = await response.json();
            setTasks(data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteTask = async (id: string) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchTasks();
            }
        } catch (error) {
            console.error("Error deleting task:", error)
        }
    }

    const handleDeleteAllTasks = async () => {
        try {
            const response = await fetch (API_URL, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchTasks();
            }
        } catch (error) {
            console.error("Error deleting all tasks:", error)
        }
        console.error("Delete All is not yet implemented in CrudApi hook");
    };

    const handleToggleTask = async (id: string) => {
        const taskToUpdate = tasks.find(task => task.id === id);
        if (!taskToUpdate) return
        try {
            const response = await fetch(`${API_URL}/${id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({ completed: !taskToUpdate.completed })
                }
            );
            if (response.ok) {
                fetchTasks();
            }
        } catch (error) {
            console.error('Error to updating task:', error)
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return {
        tasks,
        loading,
        addTask,
        handleDeleteTask,
        handleDeleteAllTasks,
        handleToggleTask
    }

}


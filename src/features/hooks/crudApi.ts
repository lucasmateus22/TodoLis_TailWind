import { useEffect, useState } from 'react';
import type { Task } from "@/types";

export const CrudApi = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = async (text: string, time: string, date: string) => {
        if (text.trim() === "" || time.trim() === "") {
            console.error("Task text cannot be empty");
            return;
        }
        const newTask: Task = {
            id: new Date().getTime().toString(),
            text: text,
            time: time,
            date: date,
            completed: false,
            timeCompleted: time,
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
            const deletionPromises = tasks.map(task => fetch(`${API_URL}/${task.id}`, {
                method: 'DELETE',
            })
            );
            const responses = await Promise.all(deletionPromises);
            const allReferencesDelete = responses.every(response => response.ok);

            if (allReferencesDelete) {
                setTasks([]);
            } else {
                console.error("Error deleting all tasks:")
            }
        } catch (error) {
            console.error("Error deleting all tasks:", error);
        };
    }

    const handleToggleTask = async (id: string) => {
  const taskToUpdate = tasks.find(task => task.id === id);
  if (!taskToUpdate) return;

  const newCompletedStatus = !taskToUpdate.completed;

  let updateData: { completed: boolean; timeCompleted?: string } = { 
    completed: newCompletedStatus 
  };

  if (newCompletedStatus) {
    updateData.timeCompleted = new Date().toLocaleTimeString();
  } else {
    updateData.timeCompleted = undefined; // limpa se desmarcar
  }

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    if (response.ok) {
      // atualiza no estado local, sem precisar dar fetchTasks em tudo
      setTasks(prev =>
        prev.map(task =>
          task.id === id ? { ...task, ...updateData } : task
        )
      );
    }
  } catch (error) {
    console.error('Error updating task:', error);
  }
};
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


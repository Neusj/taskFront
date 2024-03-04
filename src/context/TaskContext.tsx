import { createContext, useEffect, useState } from "react";
import { createTaskRequest, deteleTaskRequest, getTaskList, updateTaskRequest } from "../api/task";
import { CreateTask, Task, UpdateTask } from "../interfaces/task.interface";


interface TaxContexValue{
    tasks: Task[];
    createTasks: (task: CreateTask) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    updateTask: (id:string, task: UpdateTask) => Promise<void>;
}

export const TaskContext = createContext<TaxContexValue>({
    tasks: [],
    createTasks: async () => {},
    deleteTask: async () => {},
    updateTask: async () => {},
})

interface Props {
    children: React.ReactNode;
}


export const TaskProvider: React.FC<Props> = ({children}) => {
    
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
		getTaskList()
			.then((response) => response.json())
			.then((data) => setTasks(data));
	}, []);

    const createTasks = async (task: CreateTask) => {
   		const res = await createTaskRequest(task);
		const data = await res.json();
        setTasks([...tasks, data]);

    }

    const deleteTask = async(id: string) => {
        const res = await deteleTaskRequest(id);
        if (res.status == 200) {
            setTasks(tasks.filter((task) => task._id != id))
        }
    }

    const updateTask = async (id:string, task: UpdateTask) => {
        const res = await updateTaskRequest(id, task);
        const data = await res.json();
        setTasks(
            tasks.map(task => task._id == id ? {...task, ...data}: task)
        )
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTasks,
            deleteTask,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
} 
import { CreateTask, UpdateTask } from "../interfaces/task.interface";

const API = 'http://localhost:3000/api/tasks';


export const createTaskRequest = (task: CreateTask) => 
    fetch(API, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {'Content-Type': 'application/json'}
    });

export const getTaskList = () => fetch(API);

export const deteleTaskRequest = (id: string) => 
    fetch(`${API}/${id}`, {
        method: "DELETE"
    });

export const updateTaskRequest = (id: string, task: UpdateTask) => 
    fetch(`${API}/${id}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {'Content-Type': 'application/json'}
    });

import { useContext } from "react";
import { TaskContext } from "./TaskContext";


export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("La taera debe estar en un provider");
    return context
    
}
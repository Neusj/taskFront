import { IoCheckmarkCircle, IoCheckmarkCircleOutline, IoTrash } from "react-icons/io5";
import { useTasks } from "../context/useTask"
import { Task } from "../interfaces/task.interface"

interface Props {
    task: Task
}

function TaskItem({task}: Props) {
    const {deleteTask, updateTask} = useTasks();

	return (
        <div key={task._id} className="bg-gray-500 p-2 my-2 flex justify-between 
            hover:bg-gray-800 hover:cursor-pointer">
            <div>
                <h1>{task.title}</h1>
                <p>Comentarios: {task.description}</p>
            </div>
            <div className="flex gap-x-2">
                {task.done ?
                    <IoCheckmarkCircle onClick={() => {
                        updateTask(task._id, {done: !task.done});
                    }}/> :
                    <IoCheckmarkCircleOutline onClick={() => {
                        updateTask(task._id, {done: !task.done});
                    }}/>
                
                }
                <IoTrash onClick={async () => {
                    await deleteTask(task._id);
                }} />
            </div>
        </div>
	)
}

export default TaskItem
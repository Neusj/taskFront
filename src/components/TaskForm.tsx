import { ChangeEvent, FormEvent, useState } from "react"
import { createTaskRequest } from "../api/task";
import { useTasks } from "../context/useTask";

function TaskForm() {
	const [task, setTask] = useState({
		title: "",
		description: "",
		done: false,
	});
	
	const {createTasks} = useTasks()

	const handleChanges = (
		e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>
	) => setTask({...task, [e.target.name]: e.target.value});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createTasks(task);	
	}

    return (
		<div>
			<form onSubmit={handleSubmit}>
			<input 
				type="text"
				name="title"
				className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 
				block w-full my-2"
				placeholder="Ingresa el Título"
				onChange={handleChanges}
				required
			/>
			<textarea
				name="description"
				rows={3}
				className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 
				block w-full my-2"
				placeholder="Ingresa la descripción"
				onChange={handleChanges}
			></textarea>
			<label htmlFor="">
				<input type="checkbox" onChange={(e) => setTask({
					...task, done: e.target.checked
				})}/>
				<span className="ms-2">Done</span>
			</label>
			<div className="flex justify-center">
				<button className="bg-green-400 px-3 block w-2/5 rounded-lg">Save</button>
			</div>
			</form>
		</div>
    )
  }
  
  export default TaskForm
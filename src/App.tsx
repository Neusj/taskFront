import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { TaskProvider } from "./context/TaskContext"

function App() {
  return (
    <div className="bg-zinc-500 h-screen text-white flex items-center justify-center">
      <div className="bg-gray-900 p-4 w-2/5">
        <h1 className="text-3xl font-bold text-center block m-2">Gestión de tareas</h1>
        <TaskProvider>
          <TaskForm/>
          <TaskList/>
        </TaskProvider>
      </div>
    </div>
  )
}

export default App
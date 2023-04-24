import { useEffect, useState } from "react"
import { AddTask } from "./components/AddTask"
import { InfoBar } from "./components/InfoBar"
import { Task } from "./components/Task"

type Task = {
  uuid: string
  content: string
  completed: boolean
}

function App() {
  const [newTask, setNewTask] = useState<Task>() 
  const [tasks, setTasks] = useState<Task[]>([])
  const [completedTasks, setCompletedTasks] = useState(0)

  const onSubmit = () => {
    console.log(newTask)

    if (newTask !== undefined && newTask.content !== "") {
      setNewTask(newTask)
      setTasks((tasks) => [...tasks, newTask])
      
      setNewTask({
        content: '',
        completed: false,
        uuid: ''
      })
    }
  }

  const onCheck = (uuid: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task?.uuid === uuid) {
        task.completed = !task.completed
      }
      return task
    })

    setTasks(updatedTasks)
  }

  const onRemove = (uuid: string) => {
    const updatedTasks = tasks.filter((task) => task.uuid !== uuid)
    setTasks(updatedTasks)
  }

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed === true)

    setCompletedTasks(completedTasks.length)
  }, [tasks])

  return (
    <>
      <AddTask setNewTask={setNewTask} onSubmit={onSubmit} />
      <InfoBar createdTasks={tasks.length} completedTasks={completedTasks} />
      <div>
        {
          tasks && tasks.map((task) => {
            return (
              <Task key={task.uuid} info={task} onCheck={onCheck} onRemove={onRemove} />
            )
          })
        }
      </div>
    </>
  )
}

export default App

import { useEffect, useState } from "react"
import { AddTask } from "./components/AddTask"
import { Info } from "./components/Info"
import { Task } from "./components/Task"
import { Empty } from "./components/Empty"
import { Header } from "./components/Header"

export type ITask = {
  uuid: string
  content: string
  completed: boolean
}

function App() {
  const [newTask, setNewTask] = useState<ITask>() 
  const [tasks, setTasks] = useState<ITask[]>([])
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
    <div style={{ display: "flex", height: "100vh", flexDirection: "column", justifyItems: "center", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
      <Header />
      <div style={{ marginTop: "173px", width: "736px" }}>
        <AddTask setNewTask={setNewTask} onSubmit={onSubmit} />
        <Info createdTasks={tasks.length} completedTasks={completedTasks} />
      <div style={{ marginTop: "24px", width: "100%" }}>
        {
          tasks.length !== 0 ? tasks.map((task) => {
            return (
              <Task key={task.uuid} info={task} onCheck={onCheck} onRemove={onRemove} />
            )
          }) : (
            <Empty />
          )
        }
      </div>
      </div>
    </div>
  )
}

export default App

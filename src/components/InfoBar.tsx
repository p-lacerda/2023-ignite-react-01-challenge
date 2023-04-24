type InfoBarProps = {
  createdTasks: number
  completedTasks: number 
}

const InfoBar = ({ createdTasks, completedTasks }: InfoBarProps) => {
  return (
    <div>
      <p>Criadas</p>
      <p>{createdTasks}</p>

      <p>Concluídas</p>
      <p>{completedTasks}</p>
    </div>
  )
}

export {
  InfoBar
}
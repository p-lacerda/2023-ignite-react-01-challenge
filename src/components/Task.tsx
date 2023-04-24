import { useEffect, useState } from "react"

type TaskProps = {
  info: any
  onCheck: (uuid: string) => void
  onRemove: (uuid: string) => void
}

const Task = ({ info, onCheck, onRemove }: TaskProps) => {

  return (
    <div>
      <input type="checkbox" onChange={() => onCheck(info.uuid)} />
      <p>{info.content}</p>
      <button onClick={() => onRemove(info.uuid)}>Remover</button>
    </div>
  )
}

export {
  Task
}
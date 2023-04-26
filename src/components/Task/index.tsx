import { Trash } from 'phosphor-react'
import * as S from './styles'
import { ITask  } from '../../App'

type TaskProps = {
  info: ITask
  onCheck: (uuid: string) => void
  onRemove: (uuid: string) => void
}

const Task = ({ info, onCheck, onRemove }: TaskProps) => {

  return (
    <S.Container>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input type="checkbox" onChange={() => onCheck(info.uuid)} />
        <S.TextWrapper completedTask={info.completed} >{info.content}</S.TextWrapper>
      </div>
      <Trash onClick={() => onRemove(info.uuid)} size={24} color="#808080" style={{ cursor: "pointer" }} />
    </S.Container>
  )
}

export {
  Task
}
import * as S from './styles';

type InfoBarProps = {
  createdTasks: number
  completedTasks: number 
}

const Info = ({ createdTasks, completedTasks }: InfoBarProps) => {
  return (
    <S.Container>
      <S.InfoWrapper>
        <S.CreatedTasks>
          <p>Tarefas criadas</p>
          <span>{createdTasks}</span>
        </S.CreatedTasks>
        <S.CompletedTasks>
          <p>Concluídas</p>
          <span>{createdTasks !== 0 ? `${completedTasks} de ${createdTasks}` : `${completedTasks}`}</span>
        </S.CompletedTasks>
      </S.InfoWrapper>
    </S.Container>
  )
}

export {
  Info
}
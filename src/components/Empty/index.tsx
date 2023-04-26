import EmptyIcon from '../../../public/empty.svg'
import * as S from './styles';

const Empty = () => {
  return (
    <S.EmptyWrapper>
      <img src={EmptyIcon} width={56} height={56} />
      <S.TextWrapper>
        <p style={{ fontWeight: 700 }}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </S.TextWrapper>
    </S.EmptyWrapper>
  )
}

export {
  Empty
}
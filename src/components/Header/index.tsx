import * as S from './styles';
import Logo from "../../../public/logo.svg"

type Header = {
  createdTasks: number
  completedTasks: number 
}

const Header = () => {
  return (
    <>
    <S.Background />
    <S.LogoWrapper>
      <img src={Logo} />
    </S.LogoWrapper>
    </>
  )
}

export {
  Header
}
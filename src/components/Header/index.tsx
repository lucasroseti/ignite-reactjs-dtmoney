import logoImg from '../../assets/logo.svg'
import {
  HeaderContainer,
  HeaderContent,
  HeaderNewTransactionButton,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <HeaderNewTransactionButton>Nova transação</HeaderNewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

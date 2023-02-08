import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '../NewTransactionModal'

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

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderNewTransactionButton>
              Nova transação
            </HeaderNewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import {
  TransactionsContainer,
  TransactionsContent,
  TransactionsPriceHighlight,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />

      <TransactionsContent>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <TransactionsPriceHighlight variant="income">
                  $ 12.000,00
                </TransactionsPriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <TransactionsPriceHighlight variant="outcome">
                  - R$ 59,00
                </TransactionsPriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContent>
    </TransactionsContainer>
  )
}

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionContainer,
  TransactionMobile,
  TransactionMobileContainer,
  TransactionMobileInfo,
  TransactionTable,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";
import { CalendarBlank, TagSimple } from "@phosphor-icons/react";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>

        <TransactionMobile>
          {transactions.map((transaction) => {
            return (
              <TransactionMobileContainer key={transaction.id}>
                <h3>{transaction.description}</h3>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === "outcome" && "- "}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
                <TransactionMobileInfo>
                  <span>
                    <TagSimple />
                    {transaction.category}
                  </span>
                  <span>
                    <CalendarBlank />
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </span>
                </TransactionMobileInfo>
              </TransactionMobileContainer>
            );
          })}
        </TransactionMobile>
      </TransactionContainer>
    </div>
  );
}

import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { DateTask, SummaryCard, SummaryContainer } from "./style";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const summary = useSummary();

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
        {(() => {
          const lastIncome = transactions
            .filter((transaction) => transaction.type === "income")
            .pop();

          return lastIncome ? (
            <DateTask>
              Última entrada em{" "}
              {dateFormatter.format(new Date(lastIncome.createdAt))}
            </DateTask>
          ) : null;
        })()}
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
        {(() => {
          const lastOutcome = transactions
            .filter((transaction) => transaction.type === "outcome")
            .pop();

          return lastOutcome ? (
            <DateTask>
              Última entrada em{" "}
              {dateFormatter.format(new Date(lastOutcome.createdAt))}
            </DateTask>
          ) : null;
        })()}
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#fff' />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}

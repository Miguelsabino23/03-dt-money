import styled from "styled-components";

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};

  @media (max-width: 400px) {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const TransactionMobile = styled.div`
  display: none;
  margin: 0.5rem 0;
  width: 100%;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const TransactionMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  gap: 0.7rem;

  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 6px;

  h3 {
    font-size: 16px;
    font-weight: normal;
    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const TransactionMobileInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme["gray-500"]};

  span {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

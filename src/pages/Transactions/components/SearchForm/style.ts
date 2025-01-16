import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["white"]};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }

    span {
      @media (max-width: 375px) {
        display: none;
      }
    }
  }
  @media (max-width: 375px) {
    flex-wrap: wrap;
  }
`;

export const SearchFormInfo = styled.div`
  display: none;

  @media (max-width: 375px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  p {
    color: ${(props) => props.theme["gray-300"]};
  }

  span {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

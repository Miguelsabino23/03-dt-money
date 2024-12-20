import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./style";

export function SeachForm() {
  return (
    <SearchFormContainer>
      <input type='text' placeholder='Busque por transações' />

      <button type='submit'>
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

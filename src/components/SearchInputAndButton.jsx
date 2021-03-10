import { useContext, useState } from "react";
import { ResultContext } from "../contexts/ResultsContext";
import {
  ButtonContainer,
  InputAndButtonContainer,
  SearchContainer,
} from "../styles/SearchInputAndButton.style";

export const SearchInputAndButton = () => {
  const { valueInput, handleInputValue, searchAPI } = useContext(ResultContext);

  return (
    <SearchContainer>
      <InputAndButtonContainer>
        <input
          placeholder="Look for the best recipe. ."
          onChange={handleInputValue}
        />
        <ButtonContainer>
          <button onClick={() => searchAPI(valueInput)}>
            <i class="fa fa-search"></i>
          </button>
        </ButtonContainer>
      </InputAndButtonContainer>
    </SearchContainer>
  );
};

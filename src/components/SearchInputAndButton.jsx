import { useContext } from "react";
import { ResultContext } from "../contexts/ResultsContext";
import {
  ButtonContainer,
  InputAndButtonContainer,
  SearchContainer,
} from "../styles/SearchInputAndButton.style";

export const SearchInputAndButton = () => {
  const { valueInput, handleInputValue, searchRecipesAPI } = useContext(
    ResultContext
  );

  return (
    <SearchContainer>
      <InputAndButtonContainer>
        <input
          placeholder="Look for the best recipe. ."
          onChange={handleInputValue}
        />
        <ButtonContainer>
          <button
            onClick={() => {
              searchRecipesAPI(valueInput);
            }}
          >
            <i className="fa fa-search" />
          </button>
        </ButtonContainer>
      </InputAndButtonContainer>
    </SearchContainer>
  );
};

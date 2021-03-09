import {
  ButtonContainer,
  InputAndButtonContainer,
  SearchContainer,
} from "../styles/SearchInputAndButton.style";

export const SearchInputAndButton = () => {
  return (
    <SearchContainer>
      <InputAndButtonContainer>
        <input placeholder="Look for the best recipe. ." />
        <ButtonContainer>
          <button>
            <i class="fa fa-search"></i>
          </button>
        </ButtonContainer>
      </InputAndButtonContainer>
    </SearchContainer>
  );
};

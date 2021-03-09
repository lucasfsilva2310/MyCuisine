import { HeaderContainer } from "../styles/Header.style";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchInputAndButton } from "./SearchInputAndButton";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchInputAndButton />
      <Navigation />
    </HeaderContainer>
  );
};

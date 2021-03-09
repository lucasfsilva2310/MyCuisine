import { HeaderContainer } from "../styles/Header.style";
import { HamburguerButton } from "./HamburguerButton";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchInputAndButton } from "./SearchInputAndButton";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchInputAndButton />
      <HamburguerButton />
      <Navigation />
    </HeaderContainer>
  );
};

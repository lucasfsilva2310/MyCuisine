import { useContext } from "react";
import {
  FirstBar,
  HamburguerButtonContainer,
  SecondBar,
  ThirdBar,
} from "../styles/Header.style";

import { HamburguerContext } from "../contexts/HamburguerMenuContext";

export const HamburguerButton = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(HamburguerContext);

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <HamburguerButtonContainer onClick={openMenu}>
      <FirstBar isMenuOpen={isMenuOpen}></FirstBar>
      <SecondBar isMenuOpen={isMenuOpen}></SecondBar>
      <ThirdBar isMenuOpen={isMenuOpen}></ThirdBar>
    </HamburguerButtonContainer>
  );
};

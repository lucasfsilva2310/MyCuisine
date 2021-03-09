import { useContext } from "react";
import { Link } from "react-router-dom";
import { HamburguerContext } from "../contexts/HamburguerMenuContext";
import { HiddenMenu } from "../styles/Header.style";

export const MenuMobile = () => {
  const { isMenuOpen } = useContext(HamburguerContext);

  return (
    <HiddenMenu isMenuOpen={isMenuOpen}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </HiddenMenu>
  );
};

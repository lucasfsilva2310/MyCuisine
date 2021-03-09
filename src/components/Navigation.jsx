import { NavigationContainer } from "../styles/Navigation.styles";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </NavigationContainer>
  );
};

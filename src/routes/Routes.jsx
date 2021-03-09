import { Switch, Route } from "react-router-dom";
import { Description } from "../pages/Description";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { Favorites } from "../pages/Favorites";
import { FavoritesDescription } from "../pages/FavoritesDescription";
import { HamburguerContext } from "../contexts/HamburguerMenuContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { MenuMobile } from "../components/MenuMobile";

export const Routes = () => {
  const { isMenuOpen } = useContext(HamburguerContext);
  console.log("router: ", isMenuOpen);

  return (
    <>
      <Header />
      <MenuMobile />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/results" exact>
          <Search />
        </Route>
        <Route path="/description" exact>
          <Description />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/favorites/description" exact>
          <FavoritesDescription />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

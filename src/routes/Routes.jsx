import { Switch, Route } from "react-router-dom";
import { Description } from "../pages/Description";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { Favorites } from "../pages/Favorites";
import { FavoritesDescription } from "../pages/FavoritesDescription";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MenuMobile } from "../components/MenuMobile";
import { ResultsProvider } from "../contexts/ResultsContext";
import { DescriptionProvider } from "../contexts/DescriptionContext";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import { FavoritesDescriptionProvider } from "../contexts/FavoritesDescriptionContext";

export const Routes = () => {
  return (
    <>
      <ResultsProvider>
        <DescriptionProvider>
          <FavoritesProvider>
            <FavoritesDescriptionProvider>
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
            </FavoritesDescriptionProvider>
          </FavoritesProvider>
        </DescriptionProvider>
      </ResultsProvider>
      <Footer />
    </>
  );
};

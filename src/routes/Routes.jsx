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
import { TabTitle } from "../components/TabTitle";

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
                  <TabTitle section={"Home"} />
                  <Home />
                </Route>

                <Route path="/results" exact>
                  <TabTitle section={"Recipes"} />
                  <Search />
                </Route>

                <Route path="/description" exact>
                  <TabTitle section={"Description"} />
                  <Description />
                </Route>

                <Route path="/favorites" exact>
                  <TabTitle section={"Favorites"} />
                  <Favorites />
                </Route>
                <Route path="/favorites/description" exact>
                  <TabTitle section={"Favorites Description"} />
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

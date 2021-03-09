import { Switch, Route } from "react-router-dom";
import { Description } from "../pages/Description";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { Favorites } from "../pages/Favorites";
import { FavoritesDescription } from "../pages/FavoritesDescription";

export const Routes = () => {
  return (
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
  );
};

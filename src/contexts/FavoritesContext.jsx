import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { DescriptionContext } from "./DescriptionContext";

export const FavoritesContext = createContext({});

export const FavoritesProvider = ({ children }) => {
  const history = useHistory();
  const { recipeDescription } = useContext(DescriptionContext);

  const [wasRecipeAddedToFavorites, setWasRecipeAddedToFavorites] = useState(
    false
  );

  const [recipeAlreadyInFav, setRecipeAlreadyInFav] = useState(false);

  function saveIntoLocalStorage() {
    if (localStorage.getItem("recipes") === null) {
      let firstRecipe = [];
      firstRecipe.push(recipeDescription);
      localStorage.setItem("recipes", JSON.stringify(firstRecipe));
      setWasRecipeAddedToFavorites(true);
      setTimeout(() => setWasRecipeAddedToFavorites(false), 5000);
      return;
    }

    let favoriteRecipes = JSON.parse(localStorage.getItem("recipes"));

    let alreadyInsideFavorites = favoriteRecipes.filter(
      (recipe) => recipe.label === recipeDescription.label
    );

    if (alreadyInsideFavorites.length > 0) {
      setRecipeAlreadyInFav(true);
      setTimeout(() => setRecipeAlreadyInFav(false), 5000);
      return;
    }

    favoriteRecipes = [...favoriteRecipes, recipeDescription];
    localStorage.setItem("recipes", JSON.stringify(favoriteRecipes));
    setWasRecipeAddedToFavorites(true);
    setTimeout(() => setWasRecipeAddedToFavorites(false), 5000);
  }

  function deleteFromLocalStorage(label) {
    if (localStorage.getItem("recipes") === null) {
      return;
    }
    document.body.style.cursor = "wait";
    let favoriteRecipes = JSON.parse(localStorage.getItem("recipes"));
    let removedFromFavorites = favoriteRecipes.filter(
      (recipe) => recipe.label !== label
    );
    localStorage.setItem("recipes", JSON.stringify(removedFromFavorites));
    setTimeout(() => {
      history.push("/favorites");
    }, 1500);
  }
  return (
    <FavoritesContext.Provider
      value={{
        saveIntoLocalStorage,
        wasRecipeAddedToFavorites,
        setWasRecipeAddedToFavorites,
        deleteFromLocalStorage,
        recipeAlreadyInFav,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

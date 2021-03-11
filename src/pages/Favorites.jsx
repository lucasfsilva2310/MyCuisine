import { useEffect } from "react";
import { RecipeCards } from "../components/RecipeCards";

export const Favorites = () => {
  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);

  let favoriteRecipes =
    JSON.parse(localStorage.getItem("recipes")) !== null
      ? JSON.parse(localStorage.getItem("recipes"))
      : [];

  return <RecipeCards allRecipes={favoriteRecipes} />;
};

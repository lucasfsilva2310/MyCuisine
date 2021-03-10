import { useContext, useEffect } from "react";
import { RecipeCards } from "../components/RecipeCards";
import { ResultContext } from "../contexts/ResultsContext";

export const Search = () => {
  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);

  return <RecipeCards />;
};

import { useContext, useEffect } from "react";
import { RecipeCards } from "../components/RecipeCards";
import { ResultContext } from "../contexts/ResultsContext";

export const Search = () => {
  const { recipesResult, youtubeVideoId } = useContext(ResultContext);

  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);
  // console.log(
  //   "Receitas chegaram na pagina? ",
  //   recipesResult,
  //   "\nId Youtube chegou na pagina? ",
  //   youtubeVideoId
  // ); //RETIRAR

  return <RecipeCards />;
};

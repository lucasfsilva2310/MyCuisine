import { useContext } from "react";
import { ResultContext } from "../contexts/ResultsContext";

export const Search = () => {
  const { recipesResult, youtubeVideoId } = useContext(ResultContext);

  console.log(
    "Receitas chegaram na pagina? ",
    recipesResult,
    "\nId Youtube chegou na pagina? ",
    youtubeVideoId
  ); //RETIRAR

  return <h1 style={{ "margin-top": "10rem" }}>Search</h1>;
};

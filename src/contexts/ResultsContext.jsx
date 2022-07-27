import axios from "axios";
import { createContext, useState } from "react";
import { useHistory } from "react-router";
import { API_EDAMAN_ID, API_EDAMAN_KEY } from "../constants";

export const ResultContext = createContext({});

export const ResultsProvider = ({ children }) => {
  const history = useHistory();

  const [valueInput, setValueInput] = useState("");
  const [recipesResult, setRecipesResult] = useState([]);

  function handleInputValue(ev) {
    let value = ev.target.value;
    setValueInput(value);
  }

  async function searchRecipesAPI(input) {
    const inputForRequest = input.split(" ").join("+");
    let recipes = [];

    document.body.style.cursor = "wait"; // TODO: Create Loading button component
    
    try {

      const result = await axios.get(`https://api.edamam.com/search?q=${inputForRequest}&to=100&app_id=${API_EDAMAN_ID}&app_key=${API_EDAMAN_KEY}`)

      if (result.data?.hits?.length < 1) return

      result.data?.hits.forEach((recipe) => {
        recipes.push(recipe.recipe)
      })

      setRecipesResult(recipes)

      history.push("/results");

    } catch (error) {
      console.log("Erro requisição receitas: ", error);
      return;
    }
  }

  return (
    <ResultContext.Provider
      value={{
        handleInputValue,
        searchRecipesAPI,
        valueInput,
        setValueInput,
        recipesResult,
        setRecipesResult,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

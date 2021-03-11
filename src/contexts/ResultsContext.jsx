import axios from "axios";
import { createContext, useState } from "react";
import { useHistory } from "react-router";

export const ResultContext = createContext({});

const apiEdamanKey = "267283f1a3321a8d570fac0cf017d03e";
const apiEdamanId = "10531e7c";

export const ResultsProvider = ({ children }) => {
  const history = useHistory();

  const [valueInput, setValueInput] = useState("");
  const [recipesResult, setRecipesResult] = useState([]);

  function handleInputValue(ev) {
    let value = ev.target.value;
    setValueInput(value);
  }

  function searchRecipesAPI(input) {
    let inputForRequest = input.split(" ").join("+");
    let recipes = [];

    document.body.style.cursor = "wait";
    axios
      .get(
        `https://api.edamam.com/search?q=${inputForRequest}&to=100&app_id=${apiEdamanId}&app_key=${apiEdamanKey}`
      )
      .then((response) => {
        if (response.data.hits.length < 1) {
          return;
        }
        response.data.hits.forEach((recipe) => {
          recipes.push(recipe.recipe);
        });
        setRecipesResult(recipes);
      })
      .catch((error) => {
        console.log("Erro requisição receitas: ", error);
        return;
      });

    setTimeout(() => {
      history.push("/");
      history.push("/results");
    }, 2000);
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

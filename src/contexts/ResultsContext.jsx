import axios from "axios";
import { createContext, useState } from "react";
import { useHistory } from "react-router";

export const ResultContext = createContext({});

export const ResultsProvider = ({ children }) => {
  const history = useHistory();

  const [valueInput, setValueInput] = useState("");
  const [recipesResult, setRecipesResult] = useState([]);
  const [youtubeVideoId, setYoutubeVideoId] = useState("");

  function handleInputValue(ev) {
    let value = ev.target.value;
    setValueInput(value);
  }

  function searchAPI(input) {
    let inputForRequest = input.split(" ").join("+");
    let recipes = [];
    let savedYoutubeId = "";
    axios
      .get(
        `https://api.edamam.com/search?q=${inputForRequest}&to=100&app_id=10531e7c&app_key=267283f1a3321a8d570fac0cf017d03e`
      )
      .then((response) => {
        console.log("Requisição receitas: ", response.data.hits);
        recipes.push(response.data.hits);
        setRecipesResult(recipes);
      })
      .catch((error) => {
        console.log("Erro requisição receitas: ", error);
        return;
      });

    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?q=${inputForRequest}&type=video&videoDefinition=high&videoEmbeddable=true&maxResults=1&relevanceLanguage=en&key=AIzaSyCSOOzfIafqx5KVilmPA5yKF6vi1GroRvI`
      )
      .then((response) => {
        console.log("Id do Youtube:", response.data.items[0].id.videoId);
        savedYoutubeId = response.data.items[0].id.videoId;

        setYoutubeVideoId(savedYoutubeId);
      })
      .catch((error) => {
        console.log("Erro Requisição Youtube: ", error);
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
        searchAPI,
        valueInput,
        setValueInput,
        recipesResult,
        setRecipesResult,
        youtubeVideoId,
        setYoutubeVideoId,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

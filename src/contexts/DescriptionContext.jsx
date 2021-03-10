import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { ResultContext } from "./ResultsContext";

export const DescriptionContext = createContext({});

export const DescriptionProvider = ({ children }) => {
  const history = useHistory();
  const { recipesResult } = useContext(ResultContext);

  const [recipeDescription, setRecipeDescription] = useState({});

  const [embedHtmlYoutubeVid, setEmbedHtmlYoutubeVid] = useState("");

  const [tryAlso, setTryAlso] = useState([]);

  function saveRecipeData(recipe) {
    document.body.style.cursor = "wait";
    setRecipeDescription(recipe);
    let sugestions = [];

    for (let i = 0; i < 3; i++) {
      let randomRecipe = Math.floor(Math.random() * 50);
      sugestions.push(recipesResult[randomRecipe]);
    }
    setTryAlso(sugestions);
    setTimeout(() => history.push("/description"), 1500);
  }

  function getYoutubeIframe(name) {
    let inputForRequest = name.split(" ").join("+");

    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?q=${inputForRequest}+recipe&type=video&videoDefinition=high&videoEmbeddable=true&maxResults=1&relevanceLanguage=en&key=AIzaSyCSOOzfIafqx5KVilmPA5yKF6vi1GroRvI`
      )
      .then((response) => {
        let savedYoutubeId = response.data.items[0].id.videoId;

        axios
          .get(
            `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCSOOzfIafqx5KVilmPA5yKF6vi1GroRvI&id=${savedYoutubeId}&part=player`
          )
          .then((response) =>
            setEmbedHtmlYoutubeVid(response.data.items[0].player.embedHtml)
          )
          .catch((error) => console.log("erro Iframe: ", error));
      })
      .catch((error) => {
        console.log("Erro Requisição Youtube: ", error);
        return;
      });
  }

  return (
    <DescriptionContext.Provider
      value={{
        recipeDescription,
        tryAlso,
        saveRecipeData,
        getYoutubeIframe,
        embedHtmlYoutubeVid,
      }}
    >
      {children}
    </DescriptionContext.Provider>
  );
};

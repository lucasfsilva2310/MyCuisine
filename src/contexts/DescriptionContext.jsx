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

  const apiYoutubeKey = "AIzaSyCSOOzfIafqx5KVilmPA5yKF6vi1GroRvI";

  function saveRecipeData(recipe) {
    document.body.style.cursor = "wait";
    setRecipeDescription(recipe);
    let sugestions = [];

    for (let i = 0; i < 3; i++) {
      let randomRecipe = Math.floor(Math.random() * 50);
      sugestions.push(recipesResult[randomRecipe]);
    }
    setTryAlso(sugestions);

    setTimeout(() => {
      history.push("/results");
      history.push("/description");
    }, 1500);
  }

  function getYoutubeIframe(name) {
    let inputForRequest = name.split(" ").join("+");
    let inputToGetVideoId = `https://youtube.googleapis.com/youtube/v3/search?q=${inputForRequest}+recipe&type=video&videoDefinition=high&videoEmbeddable=true&maxResults=1&relevanceLanguage=en&key=${apiYoutubeKey}`;

    axios
      .get(inputToGetVideoId)
      .then((response) => {
        let savedYoutubeId = response.data.items[0].id.videoId;
        let inputToGetVideoIframe = `https://www.googleapis.com/youtube/v3/videos?key=${apiYoutubeKey}&id=${savedYoutubeId}&part=player`;

        axios
          .get(inputToGetVideoIframe)
          .then((response) =>
            setEmbedHtmlYoutubeVid(response.data.items[0].player.embedHtml)
          )
          .catch((error) => {
            console.log("erro Iframe: ", error.message);
            setEmbedHtmlYoutubeVid("<h1>Something went wrong :(");
          });
      })
      .catch((error) => {
        console.log("Erro Requisição Youtube: ", error.message);
        setEmbedHtmlYoutubeVid("<h1>Something went wrong :(");

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

import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { API_YOUTUBE_KEY } from "../constants";
import { ResultContext } from "./ResultsContext";

export const DescriptionContext = createContext({});

export const DescriptionProvider = ({ children }) => {
  const history = useHistory();
  const { recipesResult } = useContext(ResultContext);

  const [recipeDescription, setRecipeDescription] = useState({});

  const [embedHtmlYoutubeVid, setEmbedHtmlYoutubeVid] = useState("");

  const [tryAlso, setTryAlso] = useState([]);

  function saveRecipeData(recipe) {
    setRecipeDescription(recipe);
    let sugestions = [];

    for (let i = 0; i < 3; i++) {
      let randomRecipe = Math.floor(Math.random() * 50);
      sugestions.push(recipesResult[randomRecipe]);
    }
    setTryAlso(sugestions);

    history.push('/results')
    history.push("/description")
  }

  async function getYoutubeIframe(name) {
    const inputForRequest = name.split(" ").join("+");
    const inputToGetVideoId = `https://youtube.googleapis.com/youtube/v3/search?q=${inputForRequest}+recipe&type=video&videoDefinition=high&videoEmbeddable=true&maxResults=1&relevanceLanguage=en&key=${API_YOUTUBE_KEY}`;

    try {

      const youtubeResult = await axios.get(inputToGetVideoId)

      const savedYoutubeId = youtubeResult.data?.items[0] && youtubeResult.data?.items[0].id?.videoId
      const inputToGetVideoIframe = `https://www.googleapis.com/youtube/v3/videos?key=${API_YOUTUBE_KEY}&id=${savedYoutubeId}&part=player`

      const embedHtmlYoutubeVidResult = await axios.get(inputToGetVideoIframe)

      const embedHtmlYoutubeVidData = embedHtmlYoutubeVidResult.data?.items[0] && embedHtmlYoutubeVidResult.data?.items[0].player?.embedHtml

      setEmbedHtmlYoutubeVid(embedHtmlYoutubeVidData)

    } catch (error) {
      setEmbedHtmlYoutubeVid("<h1>Something went wrong :(")
    }
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

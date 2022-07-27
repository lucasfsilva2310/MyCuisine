import { createContext, useState } from "react";
import { useHistory } from "react-router";

export const FavoritesDescriptionContext = createContext({});

export const FavoritesDescriptionProvider = ({ children }) => {
  const history = useHistory();
  const [
    saveForFavoritesDescription,
    setSaveForFavoritesDescription,
  ] = useState({});

  function toSendToFavoritesDescription(recipe) {
    document.body.style.cursor = "wait";
    setSaveForFavoritesDescription(recipe);
    history.push("/favorites/description")
  }
  return (
    <FavoritesDescriptionContext.Provider
      value={{
        toSendToFavoritesDescription,
        setSaveForFavoritesDescription,
        saveForFavoritesDescription,
      }}
    >
      {children}
    </FavoritesDescriptionContext.Provider>
  );
};

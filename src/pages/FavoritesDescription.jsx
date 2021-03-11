import { useContext, useEffect } from "react";
import { DescriptionCard } from "../components/DescriptionCard";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { FavoritesDescriptionContext } from "../contexts/FavoritesDescriptionContext";
import { ButtonAnimated } from "../styles/Search.style";

export const FavoritesDescription = () => {
  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);

  const { deleteFromLocalStorage } = useContext(FavoritesContext);
  const { saveForFavoritesDescription } = useContext(
    FavoritesDescriptionContext
  );
  const { setWasRecipeAddedToFavorites } = useContext(FavoritesContext);

  return (
    <DescriptionCard
      recipe={saveForFavoritesDescription}
      button={
        <ButtonAnimated
          onClick={() => {
            deleteFromLocalStorage(saveForFavoritesDescription.label);
            setWasRecipeAddedToFavorites(true);
            setTimeout(() => setWasRecipeAddedToFavorites(false), 5000);
          }}
        >
          Remove from Favorites
        </ButtonAnimated>
      }
    />
  );
};

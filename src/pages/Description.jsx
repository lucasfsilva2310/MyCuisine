import { useContext, useEffect } from "react";
import { DescriptionCard } from "../components/DescriptionCard";
import { TryAlsoCard } from "../components/TryAlsoCard";
import { DescriptionContext } from "../contexts/DescriptionContext";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { DescriptionContainer } from "../styles/Description.style";
import { ButtonAnimated } from "../styles/Search.style";

export const Description = () => {
  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);

  const { embedHtmlYoutubeVid, recipeDescription } = useContext(
    DescriptionContext
  );

  const {
    saveIntoLocalStorage,
    wasRecipeAddedToFavorites,
    recipeAlreadyInFav,
  } = useContext(FavoritesContext);
  return (
    <>
      <DescriptionContainer>
        <DescriptionCard
          youtubeHtml={embedHtmlYoutubeVid}
          recipe={recipeDescription}
          confirmationToLocalStorage={wasRecipeAddedToFavorites}
          confirmationAlreadyInLocalStorage={recipeAlreadyInFav}
          button={
            <ButtonAnimated
              onClick={() => {
                saveIntoLocalStorage();
              }}
            >
              Add to Favorites
            </ButtonAnimated>
          }
        />
        <TryAlsoCard />;
      </DescriptionContainer>
    </>
  );
};

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
    setWasRecipeAddedToFavorites,
    wasRecipeAddedToFavorites,
  } = useContext(FavoritesContext);
  return (
    <>
      <DescriptionContainer>
        <DescriptionCard
          youtubeHtml={embedHtmlYoutubeVid}
          recipe={recipeDescription}
          confirmationToLocalStorage={wasRecipeAddedToFavorites}
          button={
            <ButtonAnimated
              onClick={() => {
                saveIntoLocalStorage();
                setWasRecipeAddedToFavorites(true);
                setTimeout(() => setWasRecipeAddedToFavorites(false), 5000);
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

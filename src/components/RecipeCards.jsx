import { useContext, useEffect, useState } from "react";
import { DescriptionContext } from "../contexts/DescriptionContext";
import { FavoritesDescriptionContext } from "../contexts/FavoritesDescriptionContext";
import { FavoritesContainer } from "../styles/Favorites.style";
import {
  ButtonAnimated,
  Card,
  InfiniteScrollCustom,
  Number,
  Type,
} from "../styles/Search.style";

export const RecipeCards = ({ allRecipes }) => {
  const { saveRecipeData, getYoutubeIframe } = useContext(DescriptionContext);
  const { toSendToFavoritesDescription } = useContext(
    FavoritesDescriptionContext
  );

  const [
    loadRecipesForInfiniteRender,
    setLoadRecipesForInfiniteRender,
  ] = useState([]);

  useEffect(() => {
    if (allRecipes.length < 14) {
      return;
    }
    let recipes = [];
    for (let i = 0; i < 15; i++) {
      recipes.push(allRecipes[i]);
    }
    setLoadRecipesForInfiniteRender(recipes);
  }, []);

  function getMoreRecipes() {
    if (allRecipes.length < 14) {
      return;
    }
    for (
      let i = loadRecipesForInfiniteRender.length;
      i < loadRecipesForInfiniteRender.length + 15;
      i++
    ) {
      setLoadRecipesForInfiniteRender([
        ...loadRecipesForInfiniteRender,
        allRecipes[i],
      ]);
    }
  }

  return (
    <>
      {loadRecipesForInfiniteRender.length < 1 ? (
        allRecipes.length > 0 ? (
          <FavoritesContainer>
            {allRecipes.map((recipe, index) => {
              return (
                <Card key={index}>
                  {recipe.image ? (
                    <img src={recipe.image} alt={recipe.label} />
                  ) : (
                    <strong>{`Not available :(`}</strong>
                  )}
                  <div>
                    <header>{recipe.label}</header>
                    <ul>
                      <li>
                        <Number>
                          <img src="images/clock.png" alt="clock" />
                          {recipe.totalTime}
                        </Number>
                        <Type>Minutes</Type>
                      </li>
                      <li>
                        <Number>
                          <img src="images/book.png" alt="book" />
                          {recipe.ingredients.length}
                        </Number>
                        <Type>Ingredients </Type>
                      </li>
                      <li>
                        <Number>
                          <img src="images/person.png" alt="person" />
                          {recipe.yield}
                        </Number>
                        <Type>Serving</Type>
                      </li>
                    </ul>

                    <footer>
                      <ButtonAnimated
                        onClick={() => {
                          toSendToFavoritesDescription(recipe);
                        }}
                      >
                        View Recipe
                      </ButtonAnimated>
                    </footer>
                  </div>
                </Card>
              );
            })}
          </FavoritesContainer>
        ) : (
          <h1 style={{ margin: "10rem" }}>{`No Results Found!! :(`}</h1>
        )
      ) : (
        <InfiniteScrollCustom
          dataLength={loadRecipesForInfiniteRender.length}
          next={getMoreRecipes}
          hasMore={true}
          loader={<h4>Loading . .</h4>}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            overflow: "none",
          }}
        >
          {loadRecipesForInfiniteRender.map((recipe, index) => {
            return (
              <Card key={index}>
                {recipe.image ? (
                  <img src={recipe.image} alt={recipe.label} />
                ) : (
                  <strong>{`Not available :(`}</strong>
                )}
                <div>
                  <header>{recipe.label}</header>
                  <ul>
                    <li>
                      <Number>
                        <img src="images/clock.png" alt="clock" />
                        {recipe.totalTime}
                      </Number>
                      <Type>Minutes</Type>
                    </li>
                    <li>
                      <Number>
                        <img src="images/book.png" alt="book" />
                        {recipe.ingredients.length}
                      </Number>
                      <Type>Ingredients </Type>
                    </li>
                    <li>
                      <Number>
                        <img src="images/person.png" alt="person" />
                        {recipe.yield}
                      </Number>
                      <Type>Serving</Type>
                    </li>
                  </ul>

                  <footer>
                    <ButtonAnimated
                      onClick={() => {
                        saveRecipeData(recipe);
                        getYoutubeIframe(recipe.label);
                      }}
                    >
                      View Recipe
                    </ButtonAnimated>
                  </footer>
                </div>
              </Card>
            );
          })}
        </InfiniteScrollCustom>
      )}
    </>
  );
};

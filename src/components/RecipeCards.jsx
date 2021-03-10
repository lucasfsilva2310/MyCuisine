import { useContext, useEffect, useState } from "react";
import { DescriptionContext } from "../contexts/DescriptionContext";
import { ResultContext } from "../contexts/ResultsContext";
import {
  ButtonAnimated,
  Card,
  InfiniteScrollCustom,
  Number,
  Type,
} from "../styles/Search.style";

export const RecipeCards = () => {
  const { recipesResult } = useContext(ResultContext);
  const { saveRecipeData, getYoutubeIframe } = useContext(DescriptionContext);

  const [loadedRecipes, setLoadedRecipes] = useState([]);

  useEffect(() => {
    if (recipesResult.length < 1) {
      return;
    }
    let recipes = [];
    for (let i = 0; i < 15; i++) {
      recipes.push(recipesResult[i]);
    }
    setLoadedRecipes(recipes);
  }, []);

  function getMoreRecipes() {
    if (recipesResult.length < 1) {
      return;
    }
    for (let i = loadedRecipes.length; i < loadedRecipes.length + 15; i++) {
      setLoadedRecipes([...loadedRecipes, recipesResult[i]]);
    }
  }

  return (
    <>
      {loadedRecipes.length < 1 ? (
        <h1 style={{ margin: "10rem" }}>{`No Results Found :(`}</h1>
      ) : (
        <InfiniteScrollCustom
          dataLength={loadedRecipes.length}
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
          {loadedRecipes.map((recipe, index) => {
            return (
              <Card key={index}>
                {recipe.image === undefined ? (
                  <strong>{`Not available :(`}</strong>
                ) : (
                  <img src={recipe.image} alt={recipe.label} />
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

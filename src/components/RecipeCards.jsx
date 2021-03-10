import { useContext, useEffect, useState } from "react";
import { ResultContext } from "../contexts/ResultsContext";
import {
  Card,
  InfiniteScrollCustom,
  Number,
  SearchContainer,
  Type,
} from "../styles/Search.style";
import InfiniteScroll from "react-infinite-scroll-component";

export const RecipeCards = () => {
  const { recipesResult } = useContext(ResultContext);

  const [loadedRecipes, setLoadedRecipes] = useState([]);

  useEffect(() => {
    let recipes = [];
    for (let i = 0; i < 15; i++) {
      recipes.push(recipesResult[i]);
    }
    setLoadedRecipes(recipes);
  }, []);

  function getMoreRecipes() {
    for (let i = loadedRecipes.length; i < loadedRecipes.length + 15; i++) {
      setLoadedRecipes([...loadedRecipes, recipesResult[i]]);
    }
  }

  return (
    <InfiniteScrollCustom
      dataLength={loadedRecipes.length}
      next={getMoreRecipes}
      hasMore={true}
      loader={<h4>Loading . .</h4>}
      style={{
        display: "flex",
        "flex-direction": "row",
        "flex-wrap": "wrap",
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
                <button>View Recipe</button>
              </footer>
            </div>
          </Card>
        );
      })}
    </InfiniteScrollCustom>
  );
};

import { useContext } from "react";
import { ResultContext } from "../contexts/ResultsContext";
import { Card, Number, SearchContainer, Type } from "../styles/Search.style";

export const RecipeCards = () => {
  const { recipesResult } = useContext(ResultContext);

  return (
    <SearchContainer>
      {recipesResult.map((recipe, index) => {
        return (
          <Card key={index}>
            <img src={recipe.image} alt={recipe.label} />
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
    </SearchContainer>
  );
};

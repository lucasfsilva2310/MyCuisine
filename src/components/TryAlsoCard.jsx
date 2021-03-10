import { useContext } from "react";
import { DescriptionContext } from "../contexts/DescriptionContext";
import { TryAlsoContainer } from "../styles/Description.style";
import { ButtonAnimated, Card, Number, Type } from "../styles/Search.style";

export const TryAlsoCard = () => {
  const { tryAlso, saveRecipeData, getYoutubeIframe } = useContext(
    DescriptionContext
  );

  return (
    <TryAlsoContainer>
      <h1>Try Also:</h1>
      {tryAlso.map((recipe, index) => {
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
    </TryAlsoContainer>
  );
};

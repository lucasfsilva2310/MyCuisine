import { useContext } from "react";
import { FavoritesContainer } from "../styles/Favorites.style";
import { ButtonAnimated, Card, Number, Type } from "../styles/Search.style";

export const FavoriteRecipes = ({ recipes }) => {
  const { toSendToFavoritesDescription } = useContext();

  return (
    <FavoritesContainer>
      {recipes.map((recipe, index) => {
        return (
          // REFATORAR TUDO ISSO
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
  );
};

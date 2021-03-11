import {
  Category,
  Data,
  DescriptionCardContainer,
  Header,
  Left,
  Main,
  NutritionData,
  Right,
} from "../styles/Description.style";
import { ButtonAnimated, Number, Type } from "../styles/Search.style";

export const FavoriteDescriptionCard = ({ recipe }) => {
  return (
    <DescriptionCardContainer style={{ margin: "12rem auto 4.5rem auto" }}>
      <Header>
        <div>
          <img src={recipe.image} alt={recipe.label} />
        </div>
        <div>
          <h1>{recipe.label}</h1>
          <ul>
            <li>
              <Number>{recipe.totalTime}</Number>
              <Type>Minutes</Type>
            </li>
            <li>
              <Number>{Math.floor(recipe.calories)}</Number>
              <Type>Calories/Serving</Type>
            </li>
            <li>
              <Number>{recipe.yield}</Number>
              <Type>Servings</Type>
            </li>
          </ul>
          <ButtonAnimated
          //   onClick={() => {
          //     saveIntoCookies();
          //     setWasRecipeAddedToFavorites(true);
          //     setTimeout(() => setWasRecipeAddedToFavorites(false), 5000);
          //   }}
          >
            Add to Favorites
          </ButtonAnimated>
          <span>
            {/* {wasRecipeAddedToFavorites && "Hmmm! Item added to favorites"} */}
          </span>
        </div>
      </Header>
      <Main>
        <Data>
          <Left>
            <div>
              <Category>{recipe.ingredientLines.length} Ingredients</Category>
              <ul>
                {recipe.ingredientLines.map((ingredient, index) => {
                  return <li>{ingredient}</li>;
                })}
              </ul>
            </div>
            <div>
              <Category>Preparation</Category>
              <span>
                See{" "}
                <a href={recipe.url} target="_blank">
                  Instructions
                </a>{" "}
                on {recipe.source}
              </span>
            </div>
          </Left>

          <Right>
            <Category>Nutrition</Category>
            <div>
              {recipe.healthLabels.map((item, index) => {
                return <span>{item},</span>;
              })}
            </div>
            <NutritionData>
              <div>
                <h4>Fat</h4>
                <span>
                  {recipe.totalNutrients.FAT
                    ? Math.floor(
                        recipe.totalNutrients.FAT.quantity / recipe.yield
                      )
                    : 0}
                  g
                </span>
                <span>
                  {recipe.totalDaily.FAT
                    ? Math.floor(recipe.totalDaily.FAT.quantity / recipe.yield)
                    : 0}
                  %
                </span>
              </div>
              <div>
                <h5>Saturaded</h5>
                <span>
                  {recipe.totalNutrients.FASAT
                    ? Math.floor(
                        recipe.totalNutrients.FASAT.quantity / recipe.yield
                      )
                    : 0}
                  g
                </span>
                <span>
                  {recipe.totalDaily.FASAT
                    ? Math.floor(
                        recipe.totalDaily.FASAT.quantity / recipe.yield
                      )
                    : 0}
                  %
                </span>
              </div>
              <div>
                <h5>Monounsaturaded</h5>
                <span>
                  {recipe.totalNutrients.FAMS
                    ? Math.floor(
                        recipe.totalNutrients.FAMS.quantity / recipe.yield
                      )
                    : 0}
                  g
                </span>
                <span>
                  {recipe.totalDaily.FAMS
                    ? Math.floor(recipe.totalDaily.FAMS.quantity / recipe.yield)
                    : 0}
                  %
                </span>
              </div>
              <div>
                <h5>Polyunsaturaded</h5>
                <span>
                  {recipe.totalNutrients.FAPU
                    ? Math.floor(
                        recipe.totalNutrients.FAPU.quantity / recipe.yield
                      )
                    : 0}
                  g
                </span>
                <span>
                  {recipe.totalDaily.FAPU
                    ? Math.floor(recipe.totalDaily.FAPU.quantity / recipe.yield)
                    : 0}
                  %
                </span>
              </div>
              <div>
                <h4>Carbs</h4>
                <span>
                  {recipe.totalNutrients.CHOCDF
                    ? Math.floor(
                        recipe.totalNutrients.CHOCDF.quantity / recipe.yield
                      )
                    : 0}
                  g
                </span>
                <span>
                  {recipe.totalDaily.CHOCDF
                    ? Math.floor(
                        recipe.totalDaily.CHOCDF.quantity / recipe.yield
                      )
                    : 0}
                  %
                </span>
              </div>
              <div>
                <h4>Protein</h4>
                <span>
                  {recipe.totalNutrients.PROCNT
                    ? Math.floor(
                        recipe.totalNutrients.PROCNT.quantity / recipe.yield
                      )
                    : 0}
                  g
                </span>
                <span>
                  {recipe.totalDaily.PROCNT
                    ? Math.floor(
                        recipe.totalDaily.PROCNT.quantity / recipe.yield
                      )
                    : 0}
                  %
                </span>
              </div>
              <div>
                <h4>Cholesterol</h4>
                <span>
                  {recipe.totalNutrients.CHOLE
                    ? Math.floor(
                        recipe.totalNutrients.CHOLE.quantity / recipe.yield
                      )
                    : 0}
                  g
                </span>
                <span>
                  {recipe.totalDaily.CHOLE
                    ? Math.floor(
                        recipe.totalDaily.CHOLE.quantity / recipe.yield
                      )
                    : 0}
                  %
                </span>
              </div>
              <div>
                <h4>Fiber</h4>
                <span>
                  {recipe.totalNutrients.FIBTG
                    ? Math.floor(
                        recipe.totalNutrients.FIBTG.quantity / recipe.yield
                      )
                    : 0}
                  g
                </span>
                <span>
                  {recipe.totalDaily.FIBTG
                    ? Math.floor(
                        recipe.totalDaily.FIBTG.quantity / recipe.yield
                      )
                    : 0}
                  %
                </span>
              </div>
              <div>
                <h4>Water</h4>
                <span>
                  {recipe.totalNutrients.WATER
                    ? Math.floor(
                        recipe.totalNutrients.WATER.quantity / recipe.yield
                      )
                    : 0}
                  g
                </span>
                <span>
                  {recipe.totalDaily.WATER
                    ? Math.floor(
                        recipe.totalDaily.WATER.quantity / recipe.yield
                      )
                    : 0}
                  %
                </span>
              </div>
            </NutritionData>
          </Right>
        </Data>
      </Main>
    </DescriptionCardContainer>
  );
};

import {
  Category,
  Data,
  DescriptionCardContainer,
  Header,
  Left,
  Main,
  NutritionData,
  Right,
  YoutubeContainer,
} from "../styles/Description.style";
import { Number, Type } from "../styles/Search.style";

export const DescriptionCard = ({
  recipe,
  youtubeHtml,
  confirmationToLocalStorage,
  confirmationAlreadyInLocalStorage,
  button,
}) => {
  let nutrientNames = [
    "FAT",
    "FASAT",
    "FAMS",
    "FAPU",
    "CHOCDF",
    "PROCNT",
    "CHOLE",
    "FIBTG",
    "WATER",
  ];
  return (
    <>
      <DescriptionCardContainer>
        <Header>
          <div className="MainImage">
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
                <Type>Cal/Serving</Type>
              </li>
              <li>
                <Number>{recipe.yield}</Number>
                <Type>Servings</Type>
              </li>
            </ul>
            {button}
            <span>
              {confirmationToLocalStorage
                ? "Hmmm! Item added to favorites"
                : ""}
              {confirmationAlreadyInLocalStorage
                ? "Item already in favorites!"
                : ""}
            </span>
          </div>
        </Header>
        <Main>
          {youtubeHtml && (
            <>
              <h2>You could also watch:</h2>
              <YoutubeContainer
                dangerouslySetInnerHTML={{ __html: youtubeHtml }}
              ></YoutubeContainer>
            </>
          )}
          <Data>
            <Left>
              <div>
                <Category>{recipe.ingredientLines.length} Ingredients</Category>
                <ul>
                  {recipe.ingredientLines.map((ingredient) => {
                    return <li>{ingredient}</li>;
                  })}
                </ul>
              </div>
              <div>
                <Category>Preparation</Category>
                <span>
                  See{" "}
                  <a href={recipe.url} target="_blank" rel="noreferrer">
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
                {nutrientNames.map((name, index) => {
                  return (
                    <div key={index}>
                      <h4>{recipe.totalNutrients[name].label}</h4>
                      <span>
                        {recipe.totalNutrients[name]
                          ? Math.floor(
                              recipe.totalNutrients[name].quantity /
                                recipe.yield
                            )
                          : 0}
                        {recipe.totalNutrients[name].unit}
                      </span>
                      <span>
                        {recipe.totalDaily[name]
                          ? Math.floor(
                              recipe.totalDaily[name].quantity / recipe.yield
                            )
                          : 0}
                        %
                      </span>
                    </div>
                  );
                })}
              </NutritionData>
            </Right>
          </Data>
        </Main>
      </DescriptionCardContainer>
    </>
  );
};

import { useContext } from "react";
import { DescriptionContext } from "../contexts/DescriptionContext";
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
import { ButtonAnimated, Number, Type } from "../styles/Search.style";

export const DescriptionCard = ({ recipe }) => {
  const { embedHtmlYoutubeVid, recipeDescription } = useContext(
    DescriptionContext
  );

  return (
    <>
      <DescriptionCardContainer>
        <Header>
          <div>
            <img src={recipeDescription.image} alt={recipeDescription.label} />
          </div>
          <div>
            <h1>{recipeDescription.label}</h1>
            <ul>
              <li>
                <Number>{recipeDescription.totalTime}</Number>
                <Type>Minutes</Type>
              </li>
              <li>
                <Number>{Math.floor(recipeDescription.calories)}</Number>
                <Type>Calories/Serving</Type>
              </li>
              <li>
                <Number>{recipeDescription.yield}</Number>
                <Type>Servings</Type>
              </li>
            </ul>
            <ButtonAnimated>Add to Favorites</ButtonAnimated>
          </div>
        </Header>
        <Main>
          <h2>You could also watch:</h2>
          <YoutubeContainer
            dangerouslySetInnerHTML={{ __html: embedHtmlYoutubeVid }}
          ></YoutubeContainer>
          <Data>
            <Left>
              <div>
                <Category>
                  {recipeDescription.ingredientLines.length} Ingredients
                </Category>
                <ul>
                  {recipeDescription.ingredientLines.map(
                    (ingredient, index) => {
                      return <li>{ingredient}</li>;
                    }
                  )}
                </ul>
              </div>
              <div>
                <Category>Preparation</Category>
                <span>
                  See{" "}
                  <a href={recipeDescription.url} target="_blank">
                    Instructions
                  </a>{" "}
                  on {recipeDescription.source}
                </span>
              </div>
            </Left>

            <Right>
              <Category>Nutrition</Category>
              <div>
                {recipeDescription.healthLabels.map((item, index) => {
                  return <span>{item},</span>;
                })}
              </div>
              <NutritionData>
                <div>
                  <h4>Fat</h4>
                  <span>
                    {recipeDescription.totalNutrients.FAT
                      ? Math.floor(
                          recipeDescription.totalNutrients.FAT.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    g
                  </span>
                  <span>
                    {recipeDescription.totalDaily.FAT
                      ? Math.floor(
                          recipeDescription.totalDaily.FAT.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div>
                  <h5>Saturaded</h5>
                  <span>
                    {recipeDescription.totalNutrients.FASAT
                      ? Math.floor(
                          recipeDescription.totalNutrients.FASAT.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    g
                  </span>
                  <span>
                    {recipeDescription.totalDaily.FASAT
                      ? Math.floor(
                          recipeDescription.totalDaily.FASAT.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div>
                  <h5>Monounsaturaded</h5>
                  <span>
                    {recipeDescription.totalNutrients.FAMS
                      ? Math.floor(
                          recipeDescription.totalNutrients.FAMS.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    g
                  </span>
                  <span>
                    {recipeDescription.totalDaily.FAMS
                      ? Math.floor(
                          recipeDescription.totalDaily.FAMS.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div>
                  <h5>Polyunsaturaded</h5>
                  <span>
                    {recipeDescription.totalNutrients.FAPU
                      ? Math.floor(
                          recipeDescription.totalNutrients.FAPU.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    g
                  </span>
                  <span>
                    {recipeDescription.totalDaily.FAPU
                      ? Math.floor(
                          recipeDescription.totalDaily.FAPU.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div>
                  <h4>Carbs</h4>
                  <span>
                    {recipeDescription.totalNutrients.CHOCDF
                      ? Math.floor(
                          recipeDescription.totalNutrients.CHOCDF.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    g
                  </span>
                  <span>
                    {recipeDescription.totalDaily.CHOCDF
                      ? Math.floor(
                          recipeDescription.totalDaily.CHOCDF.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div>
                  <h4>Protein</h4>
                  <span>
                    {recipeDescription.totalNutrients.PROCNT
                      ? Math.floor(
                          recipeDescription.totalNutrients.PROCNT.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    g
                  </span>
                  <span>
                    {recipeDescription.totalDaily.PROCNT
                      ? Math.floor(
                          recipeDescription.totalDaily.PROCNT.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div>
                  <h4>Cholesterol</h4>
                  <span>
                    {recipeDescription.totalNutrients.CHOLE
                      ? Math.floor(
                          recipeDescription.totalNutrients.CHOLE.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    g
                  </span>
                  <span>
                    {recipeDescription.totalDaily.CHOLE
                      ? Math.floor(
                          recipeDescription.totalDaily.CHOLE.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div>
                  <h4>Fiber</h4>
                  <span>
                    {recipeDescription.totalNutrients.FIBTG
                      ? Math.floor(
                          recipeDescription.totalNutrients.FIBTG.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    g
                  </span>
                  <span>
                    {recipeDescription.totalDaily.FIBTG
                      ? Math.floor(
                          recipeDescription.totalDaily.FIBTG.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div>
                  <h4>Water</h4>
                  <span>
                    {recipeDescription.totalNutrients.WATER
                      ? Math.floor(
                          recipeDescription.totalNutrients.WATER.quantity /
                            recipeDescription.yield
                        )
                      : 0}
                    g
                  </span>
                  <span>
                    {recipeDescription.totalDaily.WATER
                      ? Math.floor(
                          recipeDescription.totalDaily.WATER.quantity /
                            recipeDescription.yield
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
    </>
  );
};

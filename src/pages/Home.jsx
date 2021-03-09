import {
  HomeContainer,
  ImageContainer,
  IntroductionContainer,
} from "../styles/Home.style";

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <IntroductionContainer>
          <h1>The best recipes are just a click away</h1>
          <h2>Come see for yourself!</h2>
        </IntroductionContainer>
        <ImageContainer>
          <img src="images/homeImage.svg" alt="Hat Chef" />
        </ImageContainer>
      </HomeContainer>
    </>
  );
};

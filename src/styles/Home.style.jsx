import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-top: 6rem;
  margin-bottom: 3.5rem;
  width: 100%;

  display: flex;
  height: 48rem;
  background-color: var(--background);
`;

export const IntroductionContainer = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  font-family: Rosario;
  color: var(--text);

  h1 {
    font-size: 4rem;
    width: 90%;

    margin-top: 5rem;
  }

  h2 {
    font-size: 2.8rem;
    width: 90%;

    margin-bottom: 5rem;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;

  img {
    width: 60%;
  }

  @media (max-width: 1070px) {
    img {
      width: 70%;
    }
  }

  @media (max-width: 815px) {
    img {
      width: 85%;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

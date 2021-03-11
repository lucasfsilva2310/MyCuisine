import styled from "styled-components";
import { Card } from "./Search.style";

export const DescriptionContainer = styled.div`
  display: flex;
`;

export const DescriptionCardContainer = styled.div`
  width: 60%;
  background-color: #fcfcfc;
  margin: 12rem auto 4.5rem auto;
  padding: 1rem;
  font-family: Rosario;
  @media (max-width: 1025px) {
    margin: 12rem 1rem 4.5rem 1rem;
  }
  @media (max-width: 900px) {
    margin: 12rem 0 4.5 0;
  }
  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
  border-bottom: 1px solid #c0bbbb;
  border-radius: 2px;

  div > ul {
    display: flex;

    border-radius: 5px;
    margin: 0 auto;
    width: 80%;

    justify-content: space-between;
    list-style: none;
  }

  .MainImage > img {
    border-radius: 5px;
  }
  div > ul > li {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0.5rem;
    border-radius: 5px;
  }

  div {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  div > h1 {
    text-align: center;
  }

  div > span {
    font-size: 1rem;
    justify-content: center;
    text-align: center;
    color: var(--text);
  }

  div > button {
    width: 12rem;
    height: 3rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 873px) {
    margin: 0.5rem !important;
    div > ul {
      margin: 0.5rem auto;
    }
  }

  @media (max-width: 650px) {
    .MainImage {
      align-items: center;
    }
    .MainImage > img {
      width: 18rem;
      height: 80%;
    }
  }

  @media (max-width: 590px) {
    div > ul {
      flex-direction: column;
      margin: 1rem auto;
      width: 8rem;
    }

    div > h1 {
      font-size: 2rem;
    }
    div > ul > li > span {
      font-size: 1.5rem;
      margin: 0.2rem;
    }

    div > button {
      font-size: 1.2rem;
      height: 4rem;
    }
  }
  @media (max-width: 545px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 475px) {
    div > button {
      width: 9rem;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: Rosario;
    color: var(--text);
  }
  @media (max-width: 475px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const YoutubeContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  height: 20rem;
  background-color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: -8px 200px 75px -47px rgba(235, 232, 232, 1);
  -moz-box-shadow: -8px 200px 75px -47px rgba(235, 232, 232, 1);
  box-shadow: -8px 200px 75px -47px rgba(235, 232, 232, 1);

  iframe {
    width: 100%;
    height: 100%;
  }
`;

export const Data = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 50%;
  margin: 1rem;
  padding: 0.5rem;

  div > ul {
    font-size: 1.1rem;

    list-style: none;
    margin-bottom: 1rem;
  }

  div > ul > li {
    margin: 1.5rem 0;
  }
  div > span > a {
    text-decoration: underline;
    font-size: 1.25rem;
    margin: 0 0.3rem;
    transition: all 0.3s;
  }

  div > span > a:hover {
    font-size: 1.27rem;
    color: var(--text);
  }
  @media (max-width: 490px) {
    div > ul > li {
      font-size: 1.5rem;
    }
    div > span {
      font-size: 1.7rem;
    }
    div > span > a {
      font-size: 1.9rem;
      padding: 1rem;
    }
  }
  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 50%;
  margin: 1rem;
  padding: 0.5rem;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 0.5rem;
  }

  div > span {
    font-size: 1.05rem;
    margin: 0.5rem 0.2rem;
  }
  @media (max-width: 430px) {
    display: none;
  }
`;

export const Category = styled.h2`
  border-bottom: 1px solid grey;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const NutritionData = styled.div`
  display: flex;
  padding-top: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
  }

  div > h4 {
    font-size: 1rem;
    font-weight: 600;
    max-width: 3rem;
    min-width: 3rem;
  }

  @media (max-width: 630px) {
    div {
      display: flex;
      flex-direction: column;
    }
    div > h4 {
      font-size: 1.3rem;
      margin-right: 5rem;
    }
  }
`;
export const TryAlsoContainer = styled.div`
  width: 30%;
  margin: 12rem 0 4.5rem 0;
  padding: 1rem;
  font-family: Rosario;
  color: var(--text);
  @media (max-width: 820px) {
    display: none;
  }
`;

export const TryAlsoCardContainer = styled(Card)`
  transition: all 0.4s;
  @media (max-width: 1025px) {
    width: 18rem;
    height: 32rem;
    margin: 1rem;
  }
  @media (max-width: 900px) {
    width: 18rem;
    height: 26rem;
    margin: 0.5rem;
    & > :first-child {
      height: 12rem;
    }
  }
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.39);
  }
`;

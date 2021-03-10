import styled from "styled-components";
import { Card } from "./Search.style";

export const DescriptionContainer = styled.div`
  display: flex;
`;

export const DescriptionCardContainer = styled.div`
  width: 65%;
  background-color: #fcfcfc;
  margin: 12rem 3rem 4.5rem 12rem;
  padding: 2rem;
  font-family: Rosario;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
  border-bottom: 1px solid #c0bbbb;
  border-radius: 2px;

  div > ul {
    display: flex;

    justify-content: space-around;
    list-style: none;
  }

  div > ul > li {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  div > button {
    width: 12rem;
    height: 3rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: Rosario;
    color: var(--text);
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
    font-size: 1.2rem;
  }
  div > h5 {
    font-size: 1.1rem;
    font-weight: 400;
    padding-left: 1rem;
  }
`;
export const TryAlsoContainer = styled.div`
  width: 30%;
  margin: 12rem 1rem 0 0;
  padding: 1rem;
  font-family: Rosario;
  color: var(--text);
`;

import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";

export const InfiniteScrollCustom = styled(InfiniteScroll)`
  width: 90%;

  margin: 8rem auto 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  height: auto;
`;

export const Card = styled.div`
  width: 20rem;
  height: 34rem;

  margin: 2rem;
  background: var(--white);

  display: flex;
  flex-direction: column;

  box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.16);

  font-family: Rosario;

  color: var(--text);
  line-height: 1.5;

  transition: all 0.4s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    flex: 1;
    padding: 0 2em 1em;
  }

  div > header {
    font-weight: 600;
    font-size: 1.3rem;
  }

  div > header,
  div > ul {
    display: flex;
    padding: 0.55em 0 0.3em;
    border-bottom: 1px solid #d8d8d8;
    list-style-type: none;
    justify-content: center;
  }

  div > ul > li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div > ul > li > i {
    font-size: 1.5rem;
  }

  footer {
    text-align: center;
    margin: 0 3rem;
  }
  footer > button {
    display: inline-block;
    background-color: #ff4f87;
    margin-top: 1rem;
    padding: 0.7rem;
    width: 100%;

    text-align: center;
    border: none;
    outline: none;
    border-radius: 5px;
    color: var(--white);
    letter-spacing: 0.2px;
    font-size: 1rem;
    transition: transform 250ms ease, box-shadow 250ms ease;
  }

  footer > button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 34px 0 rgba(255, 79, 135, 0.32);
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.39);
  }
  @media (max-width: 1050px) {
    width: 18rem;
    height: 34rem;
  }
`;

export const ButtonAnimated = styled.button`
  display: inline-block;
  background-color: #ff4f87;
  margin-top: 1rem;
  padding: 0.7rem;
  width: 100%;
  text-align: center;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 5px;
  color: var(--white);
  letter-spacing: 0.2px;
  font-size: 1rem;
  transition: transform 250ms ease, box-shadow 250ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 34px 0 rgba(255, 79, 135, 0.32);
  }
`;

export const Number = styled.span`
  color: var(--number);
  margin-left: 0.3rem;
  vertical-align: bottom;
  font-size: 1.6rem;
  font-weight: 600;

  img {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const Type = styled.span`
  display: block;
  margin-top: -4px;
  font-size: 1.1rem;
  font-weight: 300;
`;

import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6rem;

  position: fixed;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;

  background: var(--header);
`;

export const HamburguerButtonContainer = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 520px) {
    display: inline-block;
  } ;
`;

export const FirstBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 1rem;
  transition: 0.4s;

  -webkit-transform: ${(props) =>
    props.isMenuOpen === true ? "rotate(-45deg) translate(-9px, 6px)" : 0};
  transform: ${(props) =>
    props.isMenuOpen === true ? "rotate(-45deg) translate(-9px, 6px)" : 0};
`;

export const SecondBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 1rem;
  transition: 0.4s;

  opacity: ${(props) => (props.isMenuOpen === true ? 0 : 1)};
`;

export const ThirdBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 1rem;
  transition: 0.4s;

  -webkit-transform: ${(props) =>
    props.isMenuOpen === true ? "rotate(45deg) translate(-8px, -8px)" : 0};
  transform: ${(props) =>
    props.iseMenuOpen === true ? "rotate(45deg) translate(-8px, -8px)" : 0};
`;

export const HiddenMenu = styled.nav`
  position: absolute;

  display: ${(props) => (props.isMenuOpen === true ? "block" : "none")};
  top: 6rem;
  right: 0;

  height: 10rem;
  width: 30%;

  background-color: var(--background);

  ul {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    justify-content: space-around;

    color: var(--text);
    font-size: 1.6rem;
  }

  ul > li {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  ul > li > a {
    padding: 0.5rem;
    transition: all 0.2s;
  }
  ul > li > a:hover {
    border-top: 5px solid var(--text);
    border-radius: 2px;
    color: var(--text-hovered);
    transition: all 0.2s;
  }
`;

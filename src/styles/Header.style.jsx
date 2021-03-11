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

  z-index: 10;
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
  border: 1px solid var(--header);
  border-radius: 2px;

  display: ${(props) => (props.isMenuOpen === true ? "block" : "none")};
  top: 6rem;
  right: 0;

  height: 10rem;
  width: 30%;

  transition: all 0.2s;
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
  }
`;

export const LogoContainer = styled.div`
  width: 25%;

  display: flex;
  align-items: center;

  img {
    height: 95%;

    border-radius: 15px;

    margin-left: 1rem;
  }

  span {
    font-size: 2.5rem;
    font-family: Rosario;
    color: var(--title);
  }

  @media (max-width: 1040px) {
    span {
      font-size: 2.2rem;
    }

    img {
      height: 85%;
    }
  }

  @media (max-width: 800px) {
    span {
      font-size: 2rem;
    }

    img {
      height: 75%;
    }
  }

  @media (max-width: 742px) {
    width: 15%;
    span {
      display: none;
    }
  }
`;

export const NavigationContainer = styled.nav`
  width: 25%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  ul {
    display: flex;

    width: 100%;
    justify-content: space-around;

    color: var(--text);
    font-size: 1.6rem;
  }

  ul > li {
    display: flex;
    height: 100%;
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

  @media (max-width: 935px) {
    margin-right: 1rem;

    ul {
      justify-content: space-between;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

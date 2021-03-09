import styled from "styled-components";

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

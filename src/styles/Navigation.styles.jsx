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
  }

  @media (max-width: 935px) {
    ul {
      justify-content: space-between;
    }
  }
`;

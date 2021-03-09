import styled from "styled-components";

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

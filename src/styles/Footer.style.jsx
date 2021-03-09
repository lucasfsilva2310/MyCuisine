import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 3.5rem;

  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--footer);

  font-family: Rosario;
  font-size: 1.3rem;
`;

export const DesignByContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-left: 1rem;

  @media (max-width: 933px) {
    width: 40%;
  }
  @media (max-width: 655px) {
    display: none;
  }
`;

export const SocialMediasContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;
  }

  a > img {
    width: 25%;
  }
  @media (max-width: 933px) {
    width: 60%;
  }
  @media (max-width: 655px) {
    width: 100%;
  }

  @media (max-width: 380px) {
    a {
      font-size: 1.1rem;
    }
  }
`;

import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 25%;
  border: 1px solid red; // Retirar

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
`;

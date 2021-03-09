import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 935px) {
    width: 40%;
  }
`;

export const InputAndButtonContainer = styled.div`
  background-color: var(--white);

  width: 90%;
  height: 2.5rem;

  border-radius: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 85%;
    height: 100%;

    padding-left: 0.5rem;
    margin-left: 1rem;

    font-size: 1.3rem;

    border: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 90%;
  width: 15%;

  button {
    width: 60%;
    height: 100%;
    border-radius: 25px;

    background-color: var(--header);

    border: none;
  }
  @media (max-width: 935px) {
    button {
      width: 80%;
    }
  }
`;

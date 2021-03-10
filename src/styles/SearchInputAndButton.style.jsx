import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 935px) {
    width: 40%;
  }

  @media (max-width: 742px) {
    width: 60%;
  }

  @media (max-width: 521px) {
    width: 80%;
    margin-left: 0.7rem;
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
    outline: none;
  }
  @media (max-width: 427px) {
    width: 80%;
  }

  @media (max-width: 427px) {
    input {
      font-size: 1rem;
    }
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

    outline: none;
    border: none;
    transition: filter 0.3s, width 0.1s, height 0.1s;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:focus {
    width: 58%;
    height: 96%;
  }
  @media (max-width: 935px) {
    button {
      width: 80%;
    }
  }
  @media (max-width: 427px) {
    button {
      width: 100%;
      margin-right: 0.3rem;
    }
  }
`;

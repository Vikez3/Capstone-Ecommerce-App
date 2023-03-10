import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  h2 {
    margin: 10px 0;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 420px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

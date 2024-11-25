import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spaces['4xl']}px
    ${({ theme }) => theme.spaces['l']}px;
`;

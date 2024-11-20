import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: calc(100vh - ${({ theme }) => theme.spaces['8xl']}px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.div`
  width: 70%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: ${({ theme }) => theme.spaces['l']}px;
`;

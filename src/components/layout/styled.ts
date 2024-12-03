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

  @media ${({ theme }) => theme.mediaBreakpoints.md} {
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaBreakpoints.sm} {
    width: 100%;
    padding: ${({ theme }) => theme.spaces['l']}px;
  }
`;

import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 80%;
  min-height: 500px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: start;
  border: 2px solid ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: ${({ theme }) => theme.spaces['x']}px;
  padding: ${({ theme }) => theme.spaces['l']}px
    ${({ theme }) => theme.spaces['2xl']}px;

  @media ${({ theme }) => theme.mediaBreakpoints.sm} {
    width: 100%;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['xmedium']}px;
  margin-bottom: ${({ theme }) => theme.spaces['s']}px;
  line-height: ${({ theme }) => theme.fontSizes['medium']}px;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spaces['2xl']}px;
`;

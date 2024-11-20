import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['xmedium']}px;
  line-height: ${({ theme }) => theme.fontSizes['large']}px;
  margin-top: ${({ theme }) => theme.spaces['l']}px;
`;

export const StyledText = styled.p`
  width: 50%;
  padding-top: ${({ theme }) => theme.spaces['s']}px;
  font-weight: ${({ theme }) => theme.weights['medium']};
  font-size: ${({ theme }) => theme.fontSizes['xxsmall']}px;
  line-height: ${({ theme }) => theme.fontSizes['small']}px;
  color: ${({ theme }) => theme.colors.accentTextColor};
  text-align: center;
`;

export const StyledButton = styled.button`
  width: 240px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.weights['medium']};
  font-size: ${({ theme }) => theme.fontSizes['xxsmall']}px;
  line-height: ${({ theme }) => theme.fontSizes['small']}px;
  margin-top: ${({ theme }) => theme.spaces['xl']}px;
  border: none;
  border-radius: ${({ theme }) => theme.spaces['s']}px;

  &:hover {
    cursor: pointer;
  }
`;

import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: ${({ theme }) => theme.spaces['8xl']}px;
  background: rgb(100, 111, 212);
  background: linear-gradient(
    90deg,
    rgba(100, 111, 212, 1) 39%,
    rgba(155, 163, 235, 1) 66%
  );
  padding: ${({ theme }) => theme.spaces['l']}px;
  text-align: center;
`;

export const StyledLogo = styled.div`
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['small']}px;
  line-height: ${({ theme }) => theme.fontSizes['medium']}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
`;

export const StyledText = styled.span`
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['small']}px;
  line-height: ${({ theme }) => theme.fontSizes['large']}px;
`;

export const StyledTaskCount = styled(StyledText)`
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledData = styled.div`
  font-weight: ${({ theme }) => theme.weights['medium']};
  font-size: ${({ theme }) => theme.fontSizes['xxsmall']}px;
  line-height: ${({ theme }) => theme.fontSizes['xsmall']}px;
`;

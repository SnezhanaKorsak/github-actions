import styled from 'styled-components';

export const StyledDescription = styled.div`
  font-weight: ${({ theme }) => theme.weights['regular']};
  font-size: ${({ theme }) => theme.fontSizes['xsmall']}px;
  margin-bottom: ${({ theme }) => theme.spaces['m']}px;
`;

export const StyledDescriptionHint = styled.div`
  font-weight: ${({ theme }) => theme.weights['regular']};
  font-size: ${({ theme }) => theme.fontSizes['xxsmall']}px;
  color: ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.spaces['x']}px;
`;

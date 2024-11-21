import styled from 'styled-components';

export const StyledCreateTaskButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.accentPinkColor};
  border-radius: ${({ theme }) => theme.spaces['m']}px;
  color: ${({ theme }) => theme.colors.accentPinkColor};
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['large']}px;

  &:hover {
    cursor: pointer;
  }
`;

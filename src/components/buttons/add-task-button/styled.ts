import styled from 'styled-components';

export const StyledAddTaskButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['xsmall']}px;
  line-height: ${({ theme }) => theme.fontSizes['medium']}px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

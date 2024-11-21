import styled from 'styled-components';

export const StyledDoneButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: ${({ theme }) => theme.spaces['s']}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['xsmall']}px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

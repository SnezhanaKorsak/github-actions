import styled from 'styled-components';

export const StyledExitButton = styled.button`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: ${({ theme }) => theme.spaces['2xs']}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['xsmall']}px;
  line-height: ${({ theme }) => theme.fontSizes['xmedium']}px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

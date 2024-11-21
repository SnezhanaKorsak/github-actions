import styled from 'styled-components';

export const StyledEditField = styled.input`
  width: 90%;
  height: 29px;
  border-right: none;
  border-left: none;
  border-top: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryAccent};
  font-weight: ${({ theme }) => theme.weights['regular']};
  font-size: ${({ theme }) => theme.fontSizes['xsmall']}px;

  &:focus {
    outline: none;
  }
`;

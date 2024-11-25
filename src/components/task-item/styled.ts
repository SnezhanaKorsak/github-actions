import styled from 'styled-components';

export const StyledCheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spaces['x']}px;
`;

export const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.weights['regular']};
  font-size: ${({ theme }) => theme.fontSizes['xsmall']}px;
  cursor: pointer;

  &:hover {
    &::before {
      border: 1px solid ${({ theme }) => theme.colors.secondaryAccent};
    }
  }

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 50%;
    margin-right: ${({ theme }) => theme.spaces['x']}px;
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;

  &:checked {
    & + ${StyledLabel}::before {
      content: '✓';
      color: ${({ theme }) => theme.colors.secondaryAccent};
      font-weight: ${({ theme }) => theme.weights['bold']};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledIconContainer = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  margin-left: ${({ theme }) => theme.spaces['l']}px;
  color: ${({ theme }) => theme.colors.secondaryAccent};
  font-size: ${({ theme }) => theme.fontSizes['xxsmall']}px;
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.secondaryAccent};
  font-size: ${({ theme }) => theme.fontSizes['xxsmall']}px;
  cursor: pointer;
`;

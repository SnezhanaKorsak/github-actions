import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: ${({ theme }) => theme.spaces['m']}px;
  padding: ${({ theme }) => theme.spaces['3xl']}px;
  overflow: auto;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: ${({ theme }) => theme.spaces['2xs']}px;
  margin-top: ${({ theme }) => theme.spaces['x']}px;
  padding: ${({ theme }) => theme.spaces['2xs']}px;
  font-size: ${({ theme }) => theme.fontSizes['xxsmall']}px;

  &:focus {
    outline: none;
  }
`;

export const StyledInputWithButton = styled(StyledInput)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &:focus {
    outline: none;
  }
`;

export const StyledField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.weights['regular']};
  font-size: ${({ theme }) => theme.fontSizes['xsmall']}px;
  margin-bottom: ${({ theme }) => theme.spaces['m']}px;
`;

export const StyledAddTaskButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  border: none;
  border-top-right-radius: ${({ theme }) => theme.spaces['2xs']}px;
  border-bottom-right-radius: ${({ theme }) => theme.spaces['2xs']}px;
  margin-top: ${({ theme }) => theme.spaces['x']}px;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledInputButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

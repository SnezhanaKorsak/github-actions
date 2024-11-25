import styled from 'styled-components';

import { StyledInput } from '@/pages/create-task-template/styled';

export const StyledField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.weights['regular']};
  font-size: ${({ theme }) => theme.fontSizes['xsmall']}px;
  margin-bottom: ${({ theme }) => theme.spaces['m']}px;
`;

export const StyledInputIconBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledInputWithButton = styled(StyledInput)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &:focus {
    outline: none;
  }
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

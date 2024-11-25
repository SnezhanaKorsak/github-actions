import styled from 'styled-components';

export const StyledDescription = styled.div`
  font-weight: ${({ theme }) => theme.weights['regular']};
  font-size: ${({ theme }) => theme.fontSizes['xsmall']}px;
  margin-bottom: ${({ theme }) => theme.spaces['2xl']}px;
`;

export const StyledDescriptionHint = styled.div`
  font-weight: ${({ theme }) => theme.weights['regular']};
  font-size: ${({ theme }) => theme.fontSizes['xxsmall']}px;
  color: ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.spaces['x']}px;
`;

export const StyledButtonIcon = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.secondaryAccent};
  font-size: ${({ theme }) => theme.fontSizes['xxsmall']}px;
  margin-left: ${({ theme }) => theme.spaces['s']}px;
  cursor: pointer;
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: ${({ theme }) => theme.spaces['x']}px;
  font-weight: ${({ theme }) => theme.weights['regular']};
  font-size: ${({ theme }) => theme.fontSizes['xxsmall']}px;
  margin-bottom: ${({ theme }) => theme.spaces['2xl']}px;
  padding: ${({ theme }) => theme.spaces['s']}px;
  outline: none;
`;

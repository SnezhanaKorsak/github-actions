import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: start;
  border: 2px solid ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: ${({ theme }) => theme.spaces['x']}px;
  padding: ${({ theme }) => theme.spaces['3xl']}px;
`;

export const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['xmedium']}px;
  margin-bottom: ${({ theme }) => theme.spaces['s']}px;
  line-height: ${({ theme }) => theme.fontSizes['medium']}px;
  text-align: center;
`;

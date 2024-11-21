import styled from 'styled-components';

export const StyledText = styled.p`
  margin-bottom: ${({ theme }) => theme.spaces['s']}px;
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['xmedium']}px;
  line-height: ${({ theme }) => theme.fontSizes['large']}px;
`;

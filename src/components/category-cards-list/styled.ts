import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
  min-height: 70%;

  @media ${({ theme }) => theme.mediaBreakpoints.sm} {
    width: 90%;
  }
`;

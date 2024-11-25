import styled from 'styled-components';

type StyledCategoryContainerProps = {
  bgColor: string;
};

export const StyledCategoryButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: transparent;
  margin-top: ${({ theme }) => theme.spaces['l']}px;
  margin-right: ${({ theme }) => theme.spaces['l']}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.weights['bold']};
  font-size: ${({ theme }) => theme.fontSizes['xsmall']}px;
  text-transform: uppercase;
  border: none;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledCategoryContainer = styled.div<StyledCategoryContainerProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ theme }) => theme.spaces['m']}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTaskCount = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  font-weight: ${({ theme }) => theme.weights['regular']};
`;

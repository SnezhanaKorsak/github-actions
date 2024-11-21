import {
  StyledData,
  StyledHeader,
  StyledLogo,
  StyledTaskCount,
  StyledText,
} from '@/components/header/styled';
import { index } from '@/utils/date-format';

export const Header = () => {
  const today = new Date();
  const formatedData = index(today);

  return (
    <StyledHeader>
      <StyledLogo>Your Todo list</StyledLogo>
      <StyledText>
        you have
        <StyledTaskCount> 25 tasks</StyledTaskCount> !
      </StyledText>
      <StyledData>{formatedData}</StyledData>
    </StyledHeader>
  );
};

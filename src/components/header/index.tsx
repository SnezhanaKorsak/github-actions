import {
  StyledData,
  StyledHeader,
  StyledLogo,
  StyledTaskCount,
  StyledText,
} from '@/components/header/styled';
import { useAppSelector } from '@/hooks/redux';
import { allTasksCounterSelector } from '@/store/task-categories/selectors';
import { index } from '@/utils/date-format';

export const Header = () => {
  const allTasksCounter = useAppSelector(allTasksCounterSelector);

  const today = new Date();
  const formatedData = index(today);

  return (
    <StyledHeader>
      <StyledLogo>Your Todo list</StyledLogo>
      <StyledText>
        you have
        <StyledTaskCount> {allTasksCounter} tasks</StyledTaskCount> !
      </StyledText>
      <StyledData>{formatedData}</StyledData>
    </StyledHeader>
  );
};

import {
  StyledData,
  StyledHeader,
  StyledLogo,
  StyledTaskCount,
  StyledText,
} from '@/components/header/styled';
import { useAppSelector } from '@/hooks/redux';
import { allTasksCounterSelector } from '@/store/task-categories/selectors';
import { dateFormat } from '@/utils/date-format';

export const Header = () => {
  const allTasksCounter = useAppSelector(allTasksCounterSelector);

  const today = new Date();
  const formatedData = dateFormat(today);

  return (
    <StyledHeader>
      <StyledLogo>Your Todo list</StyledLogo>
      <StyledText data-testId="header-task-count">
        you have
        <StyledTaskCount> {allTasksCounter} tasks</StyledTaskCount> !
      </StyledText>
      <StyledData data-testId="header-date">{formatedData}</StyledData>
    </StyledHeader>
  );
};

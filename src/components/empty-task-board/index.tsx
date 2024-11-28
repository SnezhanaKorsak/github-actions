import { CreateTaskButton } from '@/components/buttons/create-task-button';
import { StyledText } from '@/components/empty-task-board/styled';

export const EmptyTaskBoard = () => {
  return (
    <>
      <StyledText data-testId="empty-task-title">
        Create your first task!
      </StyledText>
      <CreateTaskButton />
    </>
  );
};

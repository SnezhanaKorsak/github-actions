import { CreateTaskButton } from '@/components/buttons/create-task-button';
import { StyledText } from '@/components/empty-task-board/styled';

export const EmptyTaskBoard = () => {
  return (
    <>
      <StyledText>Create your first task!</StyledText>
      <CreateTaskButton />
    </>
  );
};

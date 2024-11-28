import { StyledWrapper } from '@/components/task-checkbox/styled';
import { TaskItem } from '@/components/task-item';
import { Task } from '@/types/index';

type Props = {
  items: Task[];
  deleteTask: (id: string) => void;
  changeTaskName: (newTaskName: string, taskId: string) => void;
  changeTaskStatus: (newTaskStatus: boolean, taskId: string) => void;
};

export const TaskCheckbox = ({
  items,
  deleteTask,
  changeTaskName,
  changeTaskStatus,
}: Props) => {
  const itemsList = items.map(({ id, name, status }) => {
    return (
      <TaskItem
        key={id}
        id={id}
        name={name}
        status={status}
        deleteTask={deleteTask}
        changeTaskName={changeTaskName}
        changeTaskStatus={changeTaskStatus}
      />
    );
  });

  return <StyledWrapper data-testId="task-checkbox">{itemsList}</StyledWrapper>;
};

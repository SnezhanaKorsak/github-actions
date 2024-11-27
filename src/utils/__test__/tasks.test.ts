import {
  filterTaskById,
  filterTaskByStatus,
  findTaskById,
  getTasksCount,
} from '../tasks';

describe('test for tasks utils', () => {
  const tasks = [
    {
      id: '1',
      name: 'read',
      status: false,
    },
    {
      id: '2',
      name: 'buy',
      status: false,
    },
    {
      id: '3',
      name: 'delete',
      status: true,
    },
  ];

  it('should find the correct task by id', () => {
    expect(findTaskById(tasks, '2')).toStrictEqual({
      id: '2',
      name: 'buy',
      status: false,
    });
  });

  it('tasks should be filtered by id', () => {
    expect(filterTaskById(tasks, '2')).toHaveLength(2);

    expect(filterTaskById(tasks, '2')[0]).toStrictEqual({
      id: '1',
      name: 'read',
      status: false,
    });

    expect(filterTaskById(tasks, '2')[1]).toStrictEqual({
      id: '3',
      name: 'delete',
      status: true,
    });
  });

  it('tasks should be filtered by status', () => {
    expect(filterTaskByStatus(tasks, true)).toHaveLength(1);
    expect(filterTaskByStatus(tasks, false)).toHaveLength(2);

    expect(filterTaskByStatus(tasks, true)[0]).toStrictEqual({
      id: '3',
      name: 'delete',
      status: true,
    });

    expect(filterTaskByStatus(tasks, false)[0]).toStrictEqual({
      id: '1',
      name: 'read',
      status: false,
    });
  });

  it('should be the right number of tasks', () => {
    expect(getTasksCount(tasks, true)).toEqual(1);
    expect(getTasksCount(tasks, false)).toEqual(2);
  });
});

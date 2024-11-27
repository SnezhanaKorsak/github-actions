import { isEmptyList } from '../is-empty-list';

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

  const emptyList: string[] = [];

  it('should return true if list is empty', () => {
    expect(isEmptyList(emptyList)).toBeTruthy();
  });

  it('should return false if list is not empty', () => {
    expect(isEmptyList(tasks)).toBeFalsy();
  });
});

import { dateFormat } from '../date-format';

describe('test for tasks utils', () => {
  const date = new Date('2024-11-27');

  it('date should be returned in the correct format', () => {
    expect(dateFormat(date)).toEqual('Wednesday, November 27, 2024');
  });
});

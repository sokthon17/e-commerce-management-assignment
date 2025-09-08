import { dateFormat } from './date-formated';

describe('dateFormat', () => {
  it('should format a valid ISO date string to "dd MMM yyyy"', () => {
    const input = '2025-09-09';
    const expected = '09 Sep 2025';

    expect(dateFormat(input)).toBe(expected);
  });

  it('should handle another date correctly', () => {
    const input = '2023-01-01';
    const expected = '01 Jan 2023';

    expect(dateFormat(input)).toBe(expected);
  });

  it('should throw an error for invalid date string', () => {
    const invalidDate = 'not-a-date';

    expect(() => dateFormat(invalidDate)).toThrow();
  });
});

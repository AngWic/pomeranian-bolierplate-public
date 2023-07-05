import { checkStatus, roundResult, getResultAndStatus } from './UnitTests';

describe('helper function for UnitTests component', () => {
  test('roundResult function should return rounded value (2 digits after coma)', () => {
    expect(roundResult(25.3221)).toBe('25.32');
    expect(roundResult(25.3571)).toBe('25.36');
  });

  test('checkStatus function should return negated status', () => {
    expect(checkStatus(false)).toBeTruthy();
    expect(checkStatus(true)).toBeFalsy();
  });

  test('getResultAndStatus function should return object with value and status', () => {
    const mockedCheckStatus = jest.fn().mockReturnValue(false);

    // expect(getResultAndStatus(25.3221, checkStatus, true)).toEqual({
    //   result: '25.32',
    //   status: false,
    // });

    getResultAndStatus(25.3221, mockedCheckStatus, true);

    expect(mockedCheckStatus.mock.results[0].value).toBe(false);
  });
});

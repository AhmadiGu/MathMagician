import calculate from '../logic/calculate';

describe(' verfiy the press buttons', () => {
  test(' press AC it must be clear all item', () => {
    const data = {
      total: 10,
      next: 10,
      operation: '+',
    };
    const result = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(data, 'AC')).toEqual(result);
  });
  test(' press 0 it must be empty object', () => {
    const data = {
      total: 0,
      next: 0,
      operation: '0',
    };
    const result = {};
    expect(calculate(data, '0')).toMatchObject(result);
  });
  test(' press . with next=2 it must return 2. ', () => {
    const data = {
      total: 0,
      next: '2.',
      operation: null,
    };
    const result = {
      total: 0,
      next: '2.',
      operation: null,
    };
    expect(calculate(data, '.')).toEqual(result);
  });
  test(' press . with total=0. it must return {}', () => {
    const data = {
      total: '0.',
      next: 0,
      operation: null,
    };
    const result = {};
    expect(calculate(data, '.')).toEqual(result);
  });
  test(' press = it must return the result of operation', () => {
    const data = {
      total: 0,
      next: null,
      operation: '+',
    };
    const result = {};
    expect(calculate(data, '=')).toEqual(result);
  });
  test(' press = it must return the result of operation', () => {
    const data = {
      total: null,
      next: 0,
      operation: null,
    };
    const result = {};
    expect(calculate(data, '=')).toEqual(result);
  });
  test(' press +/- it must return the negative or positive of the number ', () => {
    const data = {
      total: null,
      next: 2,
      operation: null,
    };
    const result = {
      total: null,
      next: '-2',
      operation: null,
    };
    expect(calculate(data, '+/-')).toEqual(result);
  });
});

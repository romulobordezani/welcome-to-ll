import { getOnlyDigits } from './index';

describe('[String helper]', () => {
  it('cleans up anything but numbers', () => {

    let dirtyString = getOnlyDigits('dirty deeds 123');
    expect(dirtyString).toBe('123');

    dirtyString = getOnlyDigits('dirty deeds without numbers');
    expect(dirtyString).toBe('');

    dirtyString = getOnlyDigits();
    expect(dirtyString).toBe('');

  });
});



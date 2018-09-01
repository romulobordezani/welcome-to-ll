import { validateCep } from './index';

describe('[CEP helper]', () => {
  it('catchs a BAD CEP', () => {
    let badCep = validateCep('oiuyeye');
    expect(badCep.result).toBeFalsy();

    badCep = validateCep('1234');
    expect(badCep.result).toBeFalsy();

    badCep = validateCep('1234-099');
    expect(badCep.result).toBeFalsy();

    badCep = validateCep('12345-099');
    expect(badCep.result).toBeFalsy();

    badCep = validateCep('$%ˆˆ1200');
    expect(badCep.result).toBeFalsy();

    badCep = validateCep(2018);
    expect(badCep.result).toBeFalsy();

  });

  it('let a GOOD CEP pass', () => {
    let goodCep = validateCep('12345678');
    expect(goodCep.result).toBeTruthy();

    goodCep = validateCep(12345678);
    expect(goodCep.result).toBeTruthy();
  });

  it('check if it returns a message, needed to show errors', () => {
    const goodCep = validateCep('12345678');
    expect(goodCep).toMatchObject({ result: true, message: 'Válido.' });

    const badCep = validateCep('I\'m a really bad CEP...');
    expect(badCep).toMatchObject({ result: false, message: 'Inválido.' });
  });

});



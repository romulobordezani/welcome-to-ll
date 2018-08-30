export default function validateCep(string) {
  const cepRegex = /^[0-9]{8}$/;
  if (string && cepRegex.test(string)) {
    return { result: true, message: 'CEP válido' };
  }
  return { result: false, message: 'CEP inválido.' };
}

export const cepMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];

// TODO Add unit test for them both
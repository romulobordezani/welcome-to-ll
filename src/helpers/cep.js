export default function validateCep(string) {
  console.log('called', string);
  const cepRegex = /^[0-9]{8}$/;
  if (string && cepRegex.test(string)) {
    return { result: true, message: 'Válido.' };
  }
  return { result: false, message: 'Inválido.' };
}

export const cepMask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];

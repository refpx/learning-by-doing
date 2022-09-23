export const formValidate = () => {
  return {
    required: {
      value: true,
      message: 'Campo obligatorio',
    },
    patternEmail: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Email invalido',
    },
    patternUrl: {
      value:
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i,
      message: 'Url invalido',
    },
    minLength: { value: 6, message: 'Mínimo 6 caracteres' },
    validateEquals(value) {
      return {
        equals: v => v === value || 'No coinciden',
      }
    },
  }
}

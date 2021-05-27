import * as Yup from 'yup'

export const OptionalString = () => Yup.string()
export const RequiredString = (message?: string) =>
  OptionalString().required(message || 'Cannot be blank')

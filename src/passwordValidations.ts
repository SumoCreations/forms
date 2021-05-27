import * as Yup from "yup";

export const optionalPassword = (min: number = 8) =>
  Yup.string().min(min, `Must be at least ${min} characters long.`);

export const requiredPassword = (min: number) =>
  optionalPassword(min).required("Cannot be blank");

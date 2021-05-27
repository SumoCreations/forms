import * as Yup from "yup";

export const optionalEmail = () =>
  Yup.string().email("Must be a valid email address");

export const requiredEmail = () => optionalEmail().required("Cannot be blank");

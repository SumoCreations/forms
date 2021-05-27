import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const optionalPhone = () =>
  Yup.string().matches(phoneRegExp, "Phone number is not valid");

export const requiredPhone = () => optionalPhone().required("Cannot be blank");

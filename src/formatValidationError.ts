import * as Yup from "yup";

import { ErrorList } from "./types";

export const formatValidationError = (err: Yup.ValidationError): ErrorList =>
  err.inner.map((e) => ({
    message: e.message ?? "",
    path: e.path ?? "",
  }));

import React from "react";

/**
 * A simplified map of errors that can be returned by the API.
 */
export type ShallowErrorMap = { [key: string]: string };

/**
 * A general error or field specific errors.
 */
export interface FormErrors {
  /**
   * A generic error in resposne to a form submission.
   */
  error: string;
  /**
   * Field specific errors related to a form submission.
   */
  errors: ShallowErrorMap;
}

/**
 * A map of errors returned by yup or similar libraries,
 */
export type ErrorMap = { [key: string]: { message: string } };

/**
 * Used on forms w/ alternative submit scenarios to specify
 * if the default submit option was used.
 */
export type SubmitAction = "primary" | "secondary";

/**
 * A default set of props intended to be used or extended by all forms.
 */
export interface FormConfigurationProps {
  /**
   * Extend the form with any additional tailwind classes.
   */
  className?: string;
  /**
   * Extend the form's inline style with any additional tailwind classes.
   */
  style?: React.CSSProperties;
  /**
   * Prevents the default submit button from rendering.
   */
  hideSubmit?: boolean;
  /**
   * Change the title of the submit button.
   */
  submitTitle?: string;
  /**
   * An HTML id to apply to the form in case you want to
   * use the HTML form attribute on an outisde control
   * to submit the form.
   */
  id?: string;
  /**
   * If set to true the form will be disabled from user
   * interaction.
   */
  disabled?: boolean;
}

export interface ConnectedFormProps<T> extends FormConfigurationProps {
  onSuccess?: (result?: T) => void;
  onError?: () => void;
}

export type AsyncSubmitHandler<T> = (
  data: T,
  submitAction?: SubmitAction
) => Promise<FormErrors | undefined>;

export interface FormProps<T> extends FormConfigurationProps {
  defaultValues?: T;
  onSubmit: AsyncSubmitHandler<T>;
}

/**
 * Error output commonly used on our graphql APIs.
 */
export interface ValidationError {
  message: string;
  path: string;
}

/**
 * A list of errors returned from our graphQL APIs.
 */
export type ErrorList = ValidationError[];

import * as yup from "yup";

export const signUpSchema = yup.object({
  name: yup
    .string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

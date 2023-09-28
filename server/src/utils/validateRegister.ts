import { RegisterInput } from "src/types/registerInput";

export const validateRegisterInput = (registerInput: RegisterInput) => {
  if (!registerInput.email.includes("@"))
    return {
      message: "Invalid email!",
      errors: [
        {
          field: "email",
          message: "email must include @ symbol",
        },
      ],
    };

  if (registerInput.username.length <= 2) {
    return {
      message: "Invalid username!",
      errors: [
        {
          field: "username",
          message: "Length must be greater than 2",
        },
      ],
    };
  }

  if (registerInput.username.includes("@"))
    return {
      message: "Invalid username!",
      errors: [
        {
          field: "username",
          message: "username can not include @ symbol",
        },
      ],
    };

  if (registerInput.password.length <= 2) {
    return {
      message: "Invalid password!",
      errors: [
        {
          field: "password",
          message: "Length must be greater than 2",
        },
      ],
    };
  }

  return null;
};

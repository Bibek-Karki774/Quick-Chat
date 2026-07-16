import  { z }  from "zod";

const signupSchema = z.object({
  fullname: z
    .string()
    .trim()
    .nonempty("Full name is required")
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name shouldn't exceed 50 characters" })
    .regex(/^[a-zA-Z\s'.-]+$/, {
      message:
        "Name can only contain letters, spaces, apostrophes, periods, and hyphens",
    }),

  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email shouldn't exceed 100 characters" }),

  password: z
    .string()
    .nonempty("Password is required")
    .min(6, { message: "Password must be at least 6 characters" })
    .max(100, { message: "Password shouldn't exceed 100 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    }),
});

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email({ message: "Please enter a valid email address" }),

  password: z
    .string()
      .nonempty("Full name is required")
    .max(50, { message: "Password can't exceed 50 characters" }),
});

export { signupSchema, loginSchema };

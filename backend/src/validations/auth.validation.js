const { z } = require("zod");


const signupSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, "Name shouldn't exceed 50 characters"),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(100, { message: "Password shouldn't exceed 100 characters" })
});


const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(100, { message: "Password shouldn't exceed 100 characters" })
});

module.exports = {
    signupSchema,
    loginSchema
}

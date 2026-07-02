const { z } = require("zod");

const updateProfileSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, "Name shouldn't exceed 50 characters")
    .optional(),
  profilePic: z
    .string()
    .trim()
    .url({ message: "Profile picture must be a valid URL" })
    .optional(),
});

module.exports = {
  updateProfileSchema,
};
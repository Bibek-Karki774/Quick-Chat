const {
  signupSchema,
  loginSchema,
} = require("../validations/auth.validation.js");
const User = require("../models/user.model.js");
const { hashPassword, checkPassword } = require("../utils/password.util.js");
const { genToken } = require("../utils/jwt.js");

async function signup(req, res) {
  // Validate the fields
  const result = signupSchema.safeParse(req.body);

  if (result.success) {
    const { email, fullname, password } = result.data;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          message: "User already exists.",
        });
      }

      const hashedPassword = await hashPassword(password);
      const newUser = await User.create({
        email,
        fullname,
        password: hashedPassword,
      });

      return res.status(201).json({
        message: "User created successfully.",
        user: {
          id: newUser._id,
          fullname: newUser.fullname,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.error("Signup error:", error.message);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  } else {
    return res.status(400).json({
      errors: result.error.issues,
    });
  }
}

async function login(req, res) {
  try {
    const result = loginSchema.safeParse(req.body);
    if (result.success) {
      const { email, password } = result.data;

      // Check if user exist in the database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).send("Please login with valid credentials");
      }

      const isMatch = await checkPassword(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // Create a jwt if everything goes correct
      const token = genToken(user);

      // Send the token to the client
      return res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60,
        })
        .json({
          success: true,
          message: "Login successful",
        });
    } else {
      return res.status(400).json({
        errors: result.error.issues,
      });
    }
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

async function logout(req, res) {
  try{
    res.cookie("token", "", {maxAge: 0});
    res.status(200).json({message: "Logged out successfully"})
  }
   catch (error){
    console.log("Error while logging out", error.message)
    res.status(500).json({message: "Internal Server Error"})
   }
}

module.exports = {
  signup,
  login,
  logout,
};

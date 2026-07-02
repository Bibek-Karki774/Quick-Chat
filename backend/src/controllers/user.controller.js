const User = require("../models/user.model.js");
const { userSchema } = require("../validations/user.validation.js");

async function updateProfile(req, res) {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
  return res.status(400).json({ errors: result.error.issues });
}

  // Handle profile picture if uploaded

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $set: result.data },
      {
        new: true,
        runValidators: true,
      },
    ).select("-password");

    res
      .status(200)
      .json({
        success: true,
        message: "Profile updated successfully",
        user: updatedUser,
      });
  } catch (error) {
    console.log("Error while upating profile", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getUsersForSidebar(){
  
}


module.exports = {
    updateProfile,
    getUsersForSidebar
}
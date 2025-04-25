export const generateToken = (user, message, statusCode, res) => {
  const token = user.getJWTToken(); // Assuming this generates JWT

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      secure: true,            // ✅ Required for cross-site
      sameSite: "None",        // ✅ Required for cross-site
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};

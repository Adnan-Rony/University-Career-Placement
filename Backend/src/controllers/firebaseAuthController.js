import { User } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const googleLogin = async (req, res) => {
  const { name, email } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      // Create new user if they don't exist
      user = new User({
        name,
        email,
        role: 'job-seeker',
        password: null, // No password for Google sign-in users
      });
      await user.save();
    }

    // Generate JWT token
    const token = generateToken(user);

    // Set token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 5 * 24 * 60 * 60 * 1000,// 5 days
      domain: process.env.NODE_ENV === 'production'
  ? '.smartjob-clientside.vercel.app'
  : undefined,

  
    });

    res.status(200).json({
      success: true,
      message: 'Google login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};
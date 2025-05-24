import { User } from "../models/user.model.js";



export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Never expose passwords

    res.status(200).json({
      success: true,
      message: 'All users fetched successfully.',
      users,
    });
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


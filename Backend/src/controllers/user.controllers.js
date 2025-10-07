import bcrypt from "bcryptjs";

import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { generateToken } from './../utils/generateToken.js';



export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if user exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
     
      if (!password) {
        const token = generateToken(existingUser);
        return res.status(200).json({
          success: true,
          message: 'User already exists (logged in)',
          user: {
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
          },
          token,
        });
      }
      // For password-based registration, return error
      return res.status(400).json({
        success: false,
        message: 'User already exists. Please log in.',
      });
    }

    // Create new user
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Set to null for Google sign-in
      role: role || 'job-seeker',
    });

    await newUser.save();

    const token = generateToken(newUser);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 5 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};



export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        // Generate JWT
        const token = generateToken(user);



        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 5 * 24 * 60 * 60 * 1000, // 5 days
        });


        res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token

        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
};


export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        });

        return res.status(200).json({
            success: true,
            message: 'Logged out successfully.',
        });
    } catch (error) {
        console.error('Logout error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error. Please try again.',
        });
    }
};


export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // from protect middleware

    const {
      name,
      phone,
      location,
      primaryRole,
      bio,
      skills,
      yearsExperience,
      picture,
      resume,
      education,
      workExperience,
      socialLinks,//socialLinks
      certifications,
      languages,
      projects,
      address,
      dob,
      gender
    } = req.body;


    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        name,
        phone,
        location, 
         primaryRole,
        bio,
        skills,
       yearsExperience,
        picture,
        resume,
        education,
        workExperience,
        socialLinks,
        certifications,
        languages,
        projects,
        address,
        dob,
        gender
      },
      { new: true, runValidators: true }
    ).select('-password');

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      user: updatedUser
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};



export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      user, // Return full user object
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user',
      error: err.message,
    });
  }
};







export const getuserData = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find().select("-password"); // Exclude passwords for security

        return res.status(200).json({
            message: "Users data fetched successfully.",
            loggedInUser: req.user,  // Logged-in user details
            users,  // All users
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};













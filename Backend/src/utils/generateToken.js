import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,  // Ensure role is included in the token
    },
    process.env.SECRET,
    { expiresIn: '5d' } // Set an expiration time for the token
  );
};

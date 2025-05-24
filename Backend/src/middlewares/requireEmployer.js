export const requireEmployer = (req, res, next) => {
  if (req.user.role !== 'employer') {
    return res.status(403).json({ success: false, message: 'Access denied: Employers only' });
  }
  next();
};

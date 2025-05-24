export const requireJobSeeker = (req, res, next) => {
  if (req.user.role !== 'job-seeker') {
    return res.status(403).json({ success: false, message: 'Access denied: Employers only' });
  }
  next();
};

const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.userData.role)) {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    };
};

export default authorizeRoles;

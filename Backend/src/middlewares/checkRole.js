const checkRole = (requiredRole) => {
    return (req, res, next) => {
        if (req.user.role !== requiredRole) {
            return res.status(403).json({ 
                message: `Access denied: Requires ${requiredRole} role`, 
                success: false 
            });
        }
        next();
    };
};

export default checkRole;

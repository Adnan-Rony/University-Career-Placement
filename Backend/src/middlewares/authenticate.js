import jwt from "jsonwebtoken";

// const isAuthenticated = async (req, res, next) => {


//     try {
//         const token = req.cookies.token;
//         if (!token) {
//             return res.status(401).json({
//                 message: "User not authenticated",
//                 success: false,
//             })
//         }
//         const decode = await jwt.verify(token, process.env.SECRET_KEY);
//         if(!decode){
//             return res.status(401).json({
//                 message:"Invalid token",
//                 success:false
//             })
//         };
//         req.id = decode.userId;
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default isAuthenticated;




const isAuthenticated = (req, res, next) => {
    try {
        let authHeader = req.headers.authorization;
        let token = req.cookies?.token || (authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null);

        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }

        // Attach user data
        req.user = decoded;
        req.id = decoded.userId;
        
        next(); // Proceed to next middleware

    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(403).json({
            message: "Token is invalid or expired",
            success: false
        });
    }
};

export default isAuthenticated;

import admin from "../config/firebaseConfig.js"
import { UserNew } from "../models/job.model2.js";



const isAuthenticatedNew = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized access" });
        }

        // Verify Firebase token
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;

        // Check if user exists in MongoDB
        let user = await UserNew.findOne({ firebaseUID: decodedToken.uid });
        if (!user) {
            return res.status(401).json({ message: "User not found in database" });
        }

        req.userData = user;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token", error });
    }
};

export default isAuthenticatedNew;
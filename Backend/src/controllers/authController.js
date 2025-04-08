import admin from "../config/firebaseConfig.js";
import { UserNew } from "../models/job.model2.js";

export const registerUser = async (req, res) => {
    try {
        const { email, password, fullname, role } = req.body;

        // Create Firebase user
        const firebaseUser = await admin.auth().createUser({
            email,
            password,
            displayName: fullname,
        });

        // Store user in MongoDB
        const newUser = await UserNew.create({
            firebaseUID: firebaseUser.uid,
            email,
            fullname,
            role,
        });

        return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        return res.status(500).json({ message: "Error registering user", error });
    }
}
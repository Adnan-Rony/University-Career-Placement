import express from "express";

const router = express.Router();

// Define a GET route for "/"
router.get("/", (req, res) => {
    return res.status(200).json({
        message: "Connected to the server",
        success: true
    });
});

// Define another example route
router.get("/hello", (req, res) => {
    return res.status(200).json({
        message: "Hello from Express!",
        success: true
    });
});

export default router;

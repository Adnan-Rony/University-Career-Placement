import express from "express";

const router = express.Router();

// Define a GET route for "/"
router.get("/api/v1/", (req, res) => {
    return res.status(200).json({
        message: "Connected to the server",
        success: true
    });
});



export default router;

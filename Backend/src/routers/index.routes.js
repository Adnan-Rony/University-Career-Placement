import express from "express";



const router = express.Router();

// Define a GET route for "/"
router.get("/", (req, res) => {
    return res.status(200).json({
        message: "Connected to the server",
        success: true
    });
});


export default router;

import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json({
        message: "Connected to the server",
        success: true,
    });
});

export default router;

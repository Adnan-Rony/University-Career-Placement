import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import indexRoutes from "./routers/index.routes.js";
import userRoutes from "./routers/user.route.js";  
import companyRoute from "./routers/company.route.js";
import jobRoute from "./routers/job.route.js";
import applicationRoute from "./routers/application.route.js";


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:5173", // Adjust as needed
    credentials: true,
};
app.use(cors(corsOptions));

// Routes
app.use("/api/v1", indexRoutes);  // Base route

app.use("/api/v1/user", userRoutes); // User-related routes
app.use("/api/v1/company", companyRoute); // User-related routes
app.use("/api/v1/job",jobRoute ); // User-related routes
app.use("/api/v1/application",applicationRoute ); // User-related routes


//meet

export default app;

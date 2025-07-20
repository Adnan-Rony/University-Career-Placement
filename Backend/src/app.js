import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import indexRoutes from "./routers/index.routes.js";
import userRoutes from "./routers/user.route.js";  
import companyRoute from "./routers/company.route.js";
import jobRoute from "./routers/job.route.js";
import applicationRoute from "./routers/application.route.js";
import adminRoute from "./routers/admin.route.js";
import interviewRoute from "./routers/interview.route.js";
import portfolioRoute from "./routers/portfolio.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:5173", // Adjust as needed
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Routes
app.use("/api/v1", indexRoutes);  // Base route

app.use("/api/v1/user", userRoutes); // User-related routes
app.use("/api/v1/company", companyRoute); // User-related routes
app.use("/api/v1/job",jobRoute ); // User-related routes
app.use("/api/v1/application",applicationRoute ); // User-related routes
app.use("/api/v1/admin",adminRoute ); // User-related routes
app.use("/api/v1/interviews",interviewRoute ); // User-related routes
app.use("/api/v1/portfolio",portfolioRoute ); // User-related routes


// //firebase auth route
// app.use("/api/v1/userNew", UserNewroute); // User-related routes









export default app;

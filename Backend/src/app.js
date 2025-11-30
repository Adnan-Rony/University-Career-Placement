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
import paymentRoute from "./routers/payment.route.js"
import resumeRoute from "./routers/resume.route.js"
import skillAssesmentRoute from "./routers/skillAssesment.route.js"
import statRoute from "./routers/stat.route.js";



dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: ["http://localhost:5173",
             "https://smartjob-clientside.vercel.app"
    ],

    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Routes
app.use("/api/v1", indexRoutes); 


app.use("/api/v1/user", userRoutes); 
app.use("/api/v1/company", companyRoute); 
app.use("/api/v1/job",jobRoute );
app.use("/api/v1/application",applicationRoute ); 
app.use("/api/v1/admin",adminRoute ); 
app.use("/api/v1/interviews",interviewRoute ); 
app.use("/api/v1/portfolio",portfolioRoute ); 
app.use("/api/v1/payment",paymentRoute); 
app.use("/api/v1/resumebuilder",resumeRoute)
app.use("/api/v1/skillAssesment",skillAssesmentRoute)


app.use('/api/v1/statistics',statRoute)







export default app;

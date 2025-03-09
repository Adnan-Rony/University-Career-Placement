import app from "./app";
import connectDB from "./config/database.js";


const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running at port ${PORT}`);
});

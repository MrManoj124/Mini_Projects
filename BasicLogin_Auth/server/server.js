import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/user.js";


// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

// Routes
app.use('/api', authRoutes);
app.use('/api/user', userRoutes);


// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

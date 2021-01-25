import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import gameRoutes from './routes/gameRoutes.js';

dotenv.config();

// Include .js on the backend. 
// Middleware is a function that can access the request response objects. 
connectDB();

const app = express();

// allows us to see req.body
app.use(express.json());

app.use('/api/games', gameRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold));
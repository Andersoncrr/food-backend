import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from '@/routes';
import { errorHandlerMiddleware } from '@/middlewares';
import cors from 'cors';

dotenv.config();
const app: Express = express();

mongoose.connect(process.env.MONGO_DB_URI);
console.log('Connected to MongoDB');

app.listen(process.env.SERVER_PORT, () => {
    console.log(
        `[server]: Server is running at http://localhost:${process.env.SERVER_PORT}`,
    );
});
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors());

app.use('/api', router);
app.use(errorHandlerMiddleware);

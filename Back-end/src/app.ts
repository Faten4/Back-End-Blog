import express from 'express';
import { connectDB } from './config/db';
import authRouter from './routes/auth.route';
import cors from 'cors';
 import blogRouter from './routes/blog.route';
const app = express();

app.use(express.json());

app.use(cors());

connectDB();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/blog', blogRouter);

app.listen(5000, () => {
  console.log('Server is running in port 5000');
});
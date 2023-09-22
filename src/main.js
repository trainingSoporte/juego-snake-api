import express from 'express';
import cors from 'cors';
import userRoutes from './users/users.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/v1/users',userRoutes);

export default app;
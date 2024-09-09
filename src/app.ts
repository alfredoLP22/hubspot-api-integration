import express, { Application } from 'express';
import dotenv from 'dotenv';
import contactsRoutes from './routes/contactsRoutes';
import cors from 'cors';
dotenv.config(); 

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api/contacts', contactsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

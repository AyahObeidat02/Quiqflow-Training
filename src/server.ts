import express from 'express';
import pingRouter from './routes/ping.route';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(pingRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

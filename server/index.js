import express from "express";
import compression from 'compression';
import dotenv from 'dotenv'
import router from './routes/album.router.js'

// Express.js instance setup
dotenv.config();
const app = express();
const port = process.env.PORT || 3000

// Allow CORS from frontend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_ORIGIN);
  next();
});

app.use(compression());

app.use('/api/albums', router);

app.listen(port, () => {
  console.log(`Server setup at http://localhost:${port}`);
});

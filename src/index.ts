import express from 'express';

import { API_PORT, logger } from './config/config.js';
import router from './routes/index.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.listen(API_PORT, () => {
  logger.info(`Server is running on port ${API_PORT}`);
});

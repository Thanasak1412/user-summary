import winston from 'winston';
import dotenv from 'dotenv'

dotenv.config();

const API_PORT = process.env.API_PORT;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export { API_PORT, logger };

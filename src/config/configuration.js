import { config } from 'dotenv';

config();
const envVars = process.env;
const configuration = Object.freeze({
    PORT: envVars.PORT,
    nodeEnv: envVars.NODE_ENV
});

export default configuration;
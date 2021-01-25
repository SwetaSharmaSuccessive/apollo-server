import { config } from 'dotenv';

config();
const envVars = process.env;
const configuration = Object.freeze({
    port: envVars.PORT,
    nodeEnv: envVars.NODE_ENV
});

export default configuration;
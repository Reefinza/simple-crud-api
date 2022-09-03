const dotenv = require('dotenv');
const config = () => {
    dotenv.config();
    return {
        host: process.env.APP_HOST || 'localhost',
        port: process.env.APP_PORT || '8181',
        dbHost: process.env.DB_HOST || 'localhost',
        dbPort: process.env.DB_PORT || '5342',
        dbUser: process.env.DB_USER || 'postgres',
        dbPassword: process.env.DB_PASSWORD || 'stargazer',
        dbName: process.env.DB_NAME || 'Employee',
        dbDriver: process.env.DB_DRIVER || 'postgresql',
    }
}

module.exports = config;
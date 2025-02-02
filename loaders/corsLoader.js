const cors = require('cors');
const config = require('../config');

module.exports = (app) => {
  const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || config.ALLOWED_ORIGINS.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

  app.use(cors(corsOptions));  // Enable CORS for the application
};

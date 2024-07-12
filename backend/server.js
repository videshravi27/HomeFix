require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const serviceRoutes = require('./routes/services');
const userRoutes = require('./routes/user');
const reviewRoutes = require('./routes/reviews');

// Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 


// Log middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/services', serviceRoutes);
app.use('/api/user', userRoutes);
app.use('/api/reviews', reviewRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        // Listen for requests
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    }
);

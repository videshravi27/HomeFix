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

const corsOptions = {
    origin: ['https://homefix-qahi.onrender.com', 'https://homefix-indol.vercel.app'], // Your Vercel deployed site
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Log middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the HomeFix MERN Backend!');
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

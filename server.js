const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/eventRoute');
const usersRouter = require('./routes/users'); // Import the users router

app.use(cors());
app.use(express.json());

// Connect to MongoDB using async/await
async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://mrsaikumar:mrsaikumar@cluster0.8zu6a2n.mongodb.net/testAcme");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

// Call the connectToDatabase function
connectToDatabase();

// Use the routers
app.use('/', router);
app.use('/api/users', usersRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});

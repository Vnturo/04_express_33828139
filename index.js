// Set up express
const express = require("express"); // Import express module
const app = express(); // Create an express application
const port = 8000;  // Define the port number

// Handle the routes
const mainRoutes = require("./main"); // Import routes from main.js
app.use("/", mainRoutes); // Use the imported routes for the root path

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); // Start the server
